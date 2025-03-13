import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
  addToast,
  Spinner,
} from "@heroui/react";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { RiMessage2Line } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from "react";

export default function ContactForm() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        addToast({
          title: "Message Sent",
          description: "Your message has been sent successfully!",
          timeout: 1000,
          shouldShowTimeoutProgress: true,
        });

        setFormData({ name: "", email: "", subject: "", message: "" });
        onOpenChange();
      } else {
        addToast({
          title: "Error",
          description: data.error || "Something went wrong!",
          timeout: 1000,
          shouldShowTimeoutProgress: true,
        });
      }
    } catch (err) {
      addToast({
        title: "Failed to Send",
        description: "Network error, please try again later.",
        timeout: 1000,
        shouldShowTimeoutProgress: true,
      });
    }

    setLoading(false);
  };

  return (
    <>
      <Button color="success" onPress={onOpen} variant="bordered">
        Contact Me!
      </Button>

      <Modal
        isOpen={isOpen}
        placement="center"
        onOpenChange={onOpenChange}
        className=""
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Get in Touch
              </ModalHeader>
              <ModalBody>
                {/* Name Field */}
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  endContent={
                    <MdOutlineDriveFileRenameOutline className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Full Name"
                  placeholder="Enter your full name"
                  variant="bordered"
                />
                {/* Email Field */}
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  endContent={
                    <CiMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  variant="bordered"
                />
                {/* Subject Field */}
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  endContent={
                    <BiMessageDetail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Subject"
                  placeholder="Enter the subject"
                  variant="bordered"
                />
                {/* Message Field */}
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  endContent={
                    <RiMessage2Line className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Message"
                  placeholder="Write your message here..."
                  variant="bordered"
                />
              </ModalBody>

              <ModalFooter>
                <Button
                  color="danger"
                  variant="flat"
                  onPress={onClose}
                  isDisabled={loading}
                >
                  Close
                </Button>
                <Button
                  color="success"
                  onPress={handleSubmit}
                  isDisabled={loading}
                >
                  {loading ? (
                    <Spinner size="sm" color="white" />
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
