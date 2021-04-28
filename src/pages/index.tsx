import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import Head from 'next/head';
import Link from "next/link";
import { TravelTypes } from "../components/TravelTypes";
import { Divider, Box, Center, Heading, Text } from "@chakra-ui/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>
      <Header />
      <Banner />
      <TravelTypes />
      <Divider variant="solid" bg="#47585B" w="90px" h="2px" m="auto"/>
      <Box as="main" px={["0", "20"]} py={["5", "20"]}>
        <Center mb={["5", "20"]}>
          <Heading textAlign="center" fontSize={["20", "36"]}>
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
        <Center bgImage="url('/banners/europebanner.png')" bgSize="cover" w="100" height="450">
          <Link href="/europe">
            <a>
              <Box>
                <Text textAlign="center" color="#F5F8FA" fontSize="48" fontWeight="700">
                  Europa
                </Text>
                <Text textAlign="center" color="#DADADA" fontSize="24" fontWeight="700">
                  O continente mais antigo.
                </Text>
              </Box>
            </a>
          </Link>
        </Center>
      </SwiperSlide>
      <SwiperSlide>
        <Center bgImage="url('/banners/northamericabanner.png')" bgSize="cover" w="100" height="450">
        <Link href="/northamerica">
            <a>
              <Box>
                <Text textAlign="center" color="#F5F8FA" fontSize="48" fontWeight="700">
                  América do Norte
                </Text>
                <Text textAlign="center" color="#DADADA" fontSize="24" fontWeight="700">
                  
                </Text>
              </Box>
            </a>
          </Link>
        </Center>
      </SwiperSlide>
      <SwiperSlide>
        <Center bgImage="url('/banners/southamericabanner.png')" bgSize="cover" w="100" height="450">
          <Link href="/southamerica">
            <a>
              <Box>
                <Text textAlign="center" color="#F5F8FA" fontSize="48" fontWeight="700">
                  América do Sul
                </Text>
                <Text textAlign="center" color="#DADADA" fontSize="24" fontWeight="700">

                </Text>
              </Box>
            </a>
          </Link>
        </Center>
      </SwiperSlide>
      <SwiperSlide>
        <Center bgImage="url('/banners/asiabanner.png')" bgSize="cover" w="100" height="450">
          <Link href="/asia">
            <a>
              <Box>
                <Text textAlign="center" color="#F5F8FA" fontSize="48" fontWeight="700">
                  Ásia
                </Text>
                <Text textAlign="center" color="#DADADA" fontSize="24" fontWeight="700">

                </Text>
              </Box>
            </a>
          </Link>
        </Center>
      </SwiperSlide>
      <SwiperSlide>
        <Center bgImage="url('/banners/oceaniabanner.png')" bgSize="cover" w="100" height="450">
          <Link href="/oceania">
            <a>
              <Box>
                <Text textAlign="center" color="#F5F8FA" fontSize="48" fontWeight="700">
                  Oceania
                </Text>
                <Text textAlign="center" color="#DADADA" fontSize="24" fontWeight="700">

                </Text>
              </Box>
            </a>
          </Link>
        </Center>
      </SwiperSlide>
      <SwiperSlide>
        <Center bgImage="url('/banners/africabanner.png')" bgSize="cover" w="100" height="450">
        <Link href="/africa">
            <a>
              <Box>
                <Text textAlign="center" color="#F5F8FA" fontSize="48" fontWeight="700">
                  África
                </Text>
                <Text textAlign="center" color="#DADADA" fontSize="24" fontWeight="700">

                </Text>
              </Box>
            </a>
          </Link>
        </Center>
      </SwiperSlide>
    </Swiper>
      </Box>
    </>
  )
}
