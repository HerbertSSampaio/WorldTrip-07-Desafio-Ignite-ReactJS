import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";
import { Divider, Box, Center, Heading, Text } from "@chakra-ui/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <Divider variant="solid" bg="#47585B" w="90px" h="2px" m="auto"/>
      <Box as="main" p="20">
        <Center mb="20">
          <Heading textAlign="center">
            Vamos nessa? <br></br>Então escolha seu continente
          </Heading>
        </Center>
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
      <SwiperSlide>
        <Center bgImage="url('/europebanner.png')" w="100" height="450">
            <Box>
              <Text textAlign="center" color="#F5F8FA" fontSize="48" fontWeight="700">
                Europa
              </Text>
              <Text textAlign="center" color="#DADADA" fontSize="24" fontWeight="700">
                O continente mais antigo.
              </Text>
            </Box>
        </Center>
      </SwiperSlide>
      <SwiperSlide>
        <Center bgImage="url('/europebanner.png')" w="100" height="450">
            <Box>
              <Text textAlign="center" color="#F5F8FA" fontSize="48" fontWeight="700">
                Europa
              </Text>
              <Text textAlign="center" color="#DADADA" fontSize="24" fontWeight="700">
                O continente mais antigo.
              </Text>
            </Box>
        </Center>
      </SwiperSlide>
      <SwiperSlide>
        <Center bgImage="url('/europebanner.png')" w="100" height="450">
            <Box>
              <Text textAlign="center" color="#F5F8FA" fontSize="48" fontWeight="700">
                Europa
              </Text>
              <Text textAlign="center" color="#DADADA" fontSize="24" fontWeight="700">
                O continente mais antigo.
              </Text>
            </Box>
        </Center>
      </SwiperSlide>
      <SwiperSlide>
        <Center bgImage="url('/europebanner.png')" w="100" height="450">
            <Box>
              <Text textAlign="center" color="#F5F8FA" fontSize="48" fontWeight="700">
                Europa
              </Text>
              <Text textAlign="center" color="#DADADA" fontSize="24" fontWeight="700">
                O continente mais antigo.
              </Text>
            </Box>
        </Center>
      </SwiperSlide>
      <SwiperSlide>
        <Center bgImage="url('/europebanner.png')" w="100" height="450">
            <Box>
              <Text textAlign="center" color="#F5F8FA" fontSize="48" fontWeight="700">
                Europa
              </Text>
              <Text textAlign="center" color="#DADADA" fontSize="24" fontWeight="700">
                O continente mais antigo.
              </Text>
            </Box>
        </Center>
      </SwiperSlide>
    </Swiper>
      </Box>
    </>
  )
}
