import Header from "../components/Header";
import { useEffect, useRef, useState } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

export default function Contact() {
  const actionData = useActionData(); // gets { success: true } from action
  const navigation = useNavigation(); // tracks form submission state
  const formRef = useRef();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const isFormEmpty =
    !formData.full_name.trim() ||
    !formData.email.trim() ||
    !formData.subject.trim() ||
    !formData.message.trim();

  useEffect(() => {
    if (actionData?.success) {
      toast.success("Message sent successfully!");
      formRef.current?.reset();
      setFormData({ full_name: "", email: "", subject: "", message: "" });
    }
  }, [actionData]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Header />
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <p>
              Want to get in touch? Fill out the form below to send me a message
              and I will get back to you as soon as possible!
            </p>
            <div className="my-5">
              <Form method="post" ref={formRef}>
                <div className="form-floating">
                  <input
                    className="form-control"
                    id="full_name"
                    type="text"
                    name="full_name"
                    placeholder="Enter your name..."
                    required
                    onChange={handleChange}
                    value={formData.full_name}
                  />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating">
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email..."
                    required
                    onChange={handleChange}
                    value={formData.email}
                  />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating">
                  <input
                    className="form-control"
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Enter your subject..."
                    required
                    onChange={handleChange}
                    value={formData.subject}
                  />
                  <label htmlFor="subject">Subject</label>
                </div>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder="Enter your message here..."
                    style={{ height: "12rem" }}
                    required
                    onChange={handleChange}
                    value={formData.message}
                  ></textarea>
                  <input type="hidden" name="from_app" value="blog_app" />
                  <label htmlFor="message">Message</label>
                </div>
                <br />
                <button
                  className="btn btn-primary text-uppercase"
                  id="submitButton"
                  type="submit"
                  disabled={isFormEmpty || navigation.state === "submitting"}
                >
                  {navigation.state === "submitting" ? "Sending..." : "Send"}
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
