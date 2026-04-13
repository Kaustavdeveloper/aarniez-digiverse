import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const reviews = [
  { name: "John Doe", text: "Great service! Highly recommended.", role: "CEO, TechCorp" },
  { name: "Jane Smith", text: "They transformed our online presence.", role: "Founder, FashionHub" },
  { name: "John Doe", text: "Great service! Highly recommended.", role: "CEO, TechCorp" },
  { name: "Jane Smith", text: "They transformed our online presence.", role: "Founder, FashionHub" },
  { name: "John Doe", text: "Great service! Highly recommended.", role: "CEO, TechCorp" },
  { name: "Jane Smith", text: "They transformed our online presence.", role: "Founder, FashionHub" }
];
const Testimonial = () => {
  return (
    <section className="py-20 px-10 bg-gray-50">
      <h2 className="text-center text-3xl font-bold mb-10">What Our Clients Say</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
        className="mySwiper"
      >
        {reviews.map((rev, index) => (
          <SwiperSlide key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
              <p className="text-gray-700 mb-4">"{rev.text}"</p>
              <h3 className="text-lg font-semibold">{rev.name}</h3>
              <p className="text-sm text-gray-500">{rev.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonial