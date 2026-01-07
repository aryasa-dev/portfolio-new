import React from "react";
import Section from "./section";
import Divider from "./divider";
import SectionTitle from "./section-title";
import InputField from "./input-field";
import Button from "./button";
import emailjs from "@emailjs/browser";

type ContactProps = {
  data: Contact[];
};

const Contact: React.FC<ContactProps> = ({ data }) => {
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const templateID = "template_851wdsw";
  const serviceID = "service_s04pwy5";
  const publicKey = "oosYjcKm5TLaE8Hp0";

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, formRef.current!, publicKey).then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <Section id="contact">
      <Divider />
      <SectionTitle>Contact</SectionTitle>

      <div className="mt-10">
        <div className="flex flex-col lg:flex-row gap-y-8">
          <div className="flex-1 space-y-1 text-lg">
            {data &&
              data.map((dt) => (
                <React.Fragment key={dt._id}>
                  <p>
                    Email : <b>{dt.email}</b>
                  </p>
                  <p>
                    Phone : <b>{dt.phone}</b>
                  </p>
                </React.Fragment>
              ))}
          </div>

          <div className="flex-1">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col items-start space-y-4"
            >
              <InputField
                type="text"
                placeholder="Name"
                name="name"
                autoComplete="off"
                required
              />
              <InputField
                type="email"
                placeholder="Email"
                name="email"
                autoComplete="off"
                required
              />
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                cols={30}
                rows={10}
                className="px-3 py-2 font-medium w-full bg-white rounded-md border border-neutral-200 shadow-sm focus:outline-none"
              />
              {/* <Button type="submit" classname="!mt-10">
                Send Message
              </Button> */}
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
