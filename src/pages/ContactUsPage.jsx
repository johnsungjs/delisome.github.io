import { Email, Feedback, WhatsApp } from "@mui/icons-material";
import Header from "../components/Header";
import customerService from "../assets/customer-service.svg";
import { whatsAppLink } from "../services/links/whatsAppLinks";
import SimpleLayout from "../components/layouts/SimpleLayout";

export default function ContactUsPage() {
  return (
    <>
      {/* <Header text={"Help and Support"} /> */}
      <SimpleLayout text={"Help and Support"}>
        <div>
          <div className="pt-4 px-6 text-white text-center">
            <img
              alt="no-transaction"
              className="mx-auto"
              src={customerService}
            />
            <p className="pt-0 font-bold text-2xl">
              Halo, apa yang bisa kami bantu?
            </p>
          </div>
          <p></p>
        </div>
        <div className="pt-14 px-6">
          <a
            href={whatsAppLink}
            target="blank"
            className="flex items-center w-full px-4 py-2 mb-4 bg-white font-semibold text-primary text-start rounded-md"
          >
            <WhatsApp />
            <p className="inline pl-2">Contacts us Via WhatsApp</p>
          </a>
          <button className="flex items-center w-full px-4 py-2 mb-4 bg-abuMuda border-2 border-white font-semibold text-white text-start rounded-md">
            <Email />
            <p className="inline pl-2">Email</p>
          </button>
          <button className="flex items-center w-full px-4 py-2 mb-4 bg-abuMuda border-2 border-white font-semibold text-white text-start rounded-md">
            <Feedback />
            <p className="inline pl-2">Feedback</p>
          </button>
        </div>
      </SimpleLayout>
    </>
  );
}
