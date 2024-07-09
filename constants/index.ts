import imageHeroCurveGradient from "@/public/images/hero/image-hero-curve-gradient.png"
import imageHeroRobot from "@/public/images/hero/image-hero-robot.jpg"
import imageHeroBackground from "@/public/images/hero/image-hero-background.jpg"
import imageHeroNotification from "@/public/images/hero/image-hero-notification.png"
import imageHeroUserOne from "@/public/images/hero/image-hero-notification-user-01.png"
import imageHeroUserTwo from "@/public/images/hero/image-hero-notification-user-02.png"
import imageHeroUserThree from "@/public/images/hero/image-hero-notification-user-03.png"
import imageFigma from "@/public/images/collaboration/image-figma.png"
import imageNotion from "@/public/images/collaboration/image-notion.png"
import imageDiscord from "@/public/images/collaboration/image-discord.png"
import imageSlack from "@/public/images/collaboration/image-slack.png"
import imagePhotoshop from "@/public/images/collaboration/image-photoshop.png"
import imageProtopie from "@/public/images/collaboration/image-protopie.png"
import imageFramer from "@/public/images/collaboration/image-framer.png"
import imageRaindrop from "@/public/images/collaboration/image-raindrop.png"
import imageHowToUseSmartest from "@/public/images/how-to-use/image-how-to-use-card-01.png"
import imageHowToUsePhotoEditing from "@/public/images/how-to-use/image-how-to-use-card-02.png"
import imageHowToUseVideoGenerate from "@/public/images/how-to-use/image-how-to-use-card-03.png"

export const navigation = [
    {
      id: "0",
      title: "Explore",
      url: "#explore-section",
    },
    {
      id: "1",
      title: "Vantagens",
      url: "#advantages-section",
    },
    {
      id: "2",
      title: "Colaboração",
      url: "#collaboration-section",
    },
    {
      id: "3",
      title: "Como usar",
      url: "#how-to-use-section",
    },
    {
      id: "4",
      title: "Preço",
      url: "#price-section",
    },
    {
      id: "5",
      title: "Nova conta",
      url: "#signup",
      onlyMobile: true,
    },
    {
      id: "6",
      title: "Entrar",
      url: "#login",
      onlyMobile: true,
    }
]

export const collaborationApps = [
  {
    id: "0",
    title: "Figma",
    icon: imageFigma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: imageNotion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: imageDiscord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: imageSlack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: imagePhotoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: imageProtopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: imageFramer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: imageRaindrop,
    width: 38,
    height: 32,
  }
]

export const stars = [
  { top: "5%", left: "5%" },
  { top: "5%", left: "35%" },
  { top: "5%", left: "5%" },
  { top: "5%", left: "75%" },
  { top: "10%", left: "20%" },
  { top: "87%", left: "55%" },
  { top: "20%", left: "90%" },
  { top: "30%", left: "40%" },
  { top: "50%", left: "15%" },
  { top: "50%", left: "60%" },
  { top: "50%", left: "85%" },
  { top: "60%", left: "35%" },
  { top: "70%", left: "15%" },
  { top: "70%", left: "50%" },
  { top: "70%", left: "70%" },
  { top: "80%", left: "90%" },
]

export {
  imageHeroCurveGradient,
  imageHeroRobot,
  imageHeroBackground,
  imageHeroNotification,
  imageHeroUserOne,
  imageHeroUserTwo,
  imageHeroUserThree,
  imageHowToUseSmartest,
  imageHowToUsePhotoEditing,
  imageHowToUseVideoGenerate
}