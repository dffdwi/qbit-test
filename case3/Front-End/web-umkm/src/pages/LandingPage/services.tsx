import { Heading } from "../../components";
import { Suspense } from "react";
import ServiceItem from "../../components/ServiceItem";
import AnimateOnView from "../../hooks/AnimateOnView";

const data = [
  {
    diningRoomImage: "images/img_dining_room_cut.png",
    headingText: "Dine-In Experience",
    descriptionText:
      "Nikmati suasana hangat dan nyaman di BaksoKu dengan berbagai pilihan bakso yang menggugah selera.",
  },
  {
    diningRoomImage: "images/img_motorbike_1.png",
    headingText: "Delivery Service",
    descriptionText:
      "Rasakan kelezatan bakso di rumah Anda dengan layanan pengantaran cepat dan aman dari BaksoKu.",
  },
  {
    diningRoomImage: "images/img_canopy_1.png",
    headingText: "Tenant Services",
    descriptionText:
      "BaksoKu hadir di berbagai lokasi untuk melayani Anda dengan gerai yang mudah dijangkau dan layanan yang ramah.",
  },
  {
    diningRoomImage: "images/img_waiter_1.png",
    headingText: "Catering",
    descriptionText:
      "Buat acara Anda lebih berkesan dengan layanan katering dari BaksoKu yang menyediakan berbagai varian bakso lezat.",
  },
  {
    diningRoomImage: "images/img_online_1.png",
    headingText: "Online Orders",
    descriptionText:
      "Pesan bakso favorit Anda melalui platform online kami dan nikmati kemudahan berbelanja dari rumah.",
  },
  {
    diningRoomImage: "images/img_handshake_1.png",
    headingText: "Event Partnership",
    descriptionText:
      "Bekerjasama dengan BaksoKu untuk acara spesial Anda, mulai dari festival hingga acara komunitas.",
  },
];

const Services: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gray-50 py-[100px] md:py-5">
        <div className="container-xs flex flex-col gap-11 md:p-5">
          <div>
            <div className="flex flex-col items-start justify-center gap-5">
              <AnimateOnView direction="up" delay={0.1}>
                <Heading
                  as="h2"
                  className="uppercase tracking-[0.84px] !text-amber-700"
                >
                  What We Do
                </Heading>
              </AnimateOnView>
              <AnimateOnView direction="up" delay={0.2}>
                <Heading
                  size="headingxl"
                  as="h3"
                  className="w-[48%] capitalize leading-[59px] md:w-full"
                >
                  Berbagai Layanan Kami siap membantu anda.
                </Heading>
              </AnimateOnView>
            </div>
          </div>
          <div className="grid grid-cols-3 justify-center gap-[30px] md:grid-cols-2 sm:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <AnimateOnView
                  key={"wrapper" + index}
                  direction="up"
                  delay={0.1 * (index + 1)}
                >
                  <ServiceItem {...d} />
                </AnimateOnView>
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
