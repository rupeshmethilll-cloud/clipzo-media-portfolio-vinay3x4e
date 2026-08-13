import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

const srcDir = "C:\\Users\\HP840G7\\.gemini\\antigravity\\brain\\e4e56b6a-f7e4-45cb-a41f-45d3136cd812\\.user_uploaded";
const destDir = "C:\\Users\\HP840G7\\.gemini\\antigravity\\scratch\\cinematic-portfolio\\public\\slides";

const filesToCopy = {
  "media_1786246386045.png": "cover.png",
  "media_1786246397984.jpg": "are_you_hiring.jpg",
  "media_1786246402871.png": "im_vinay.png",
  "media_1786246409926.png": "why_me.png"
};

for (const [srcName, destName] of Object.entries(filesToCopy)) {
  const srcPath = path.join(srcDir, srcName);
  const destPath = path.join(destDir, destName);
  if (fs.existsSync(srcPath)) {
    try {
      fs.copyFileSync(srcPath, destPath);
      console.log(`[Config Script] Copied ${srcPath} to ${destPath}`);
    } catch (err) {
      console.error(err);
    }
  }
}

// Copy background video from D: drive if it exists
const bgSrcPath = "D:\\gamer-girl-razer-gaming-moewalls-com.mp4";
const bgDestPath = "C:\\Users\\HP840G7\\.gemini\\antigravity\\scratch\\cinematic-portfolio\\public\\videos\\background.mp4";

if (fs.existsSync(bgSrcPath)) {
  try {
    fs.copyFileSync(bgSrcPath, bgDestPath);
    console.log(`[Config Script] Copied background video from D: drive to ${bgDestPath}`);
  } catch (err) {
    console.error(`[Config Script] Error copying background video: ${err}`);
  }
}

// Copy new background image
const bgImageSrc = path.join(srcDir, "media_1786325658616.jpg");
const bgImageDest = "C:\\Users\\HP840G7\\.gemini\\antigravity\\scratch\\cinematic-portfolio\\public\\background.jpg";
if (fs.existsSync(bgImageSrc)) {
  try {
    fs.copyFileSync(bgImageSrc, bgImageDest);
    console.log(`[Config Script] Copied background image to ${bgImageDest}`);
  } catch (err) {
    console.error(`[Config Script] Error copying background image: ${err}`);
  }
}

// Copy gym videos from D: drive if they exist
const gym1Src = fs.existsSync("D:\\gym 1.MP4") ? "D:\\gym 1.MP4" : "D:\\gym 1.mp4";
const gym2Src = fs.existsSync("D:\\gym 2.MP4") ? "D:\\gym 2.MP4" : "D:\\gym 2.mp4";

const gym1Dest = "C:\\Users\\HP840G7\\.gemini\\antigravity\\scratch\\cinematic-portfolio\\public\\videos\\gym_1.mp4";
const gym2Dest = "C:\\Users\\HP840G7\\.gemini\\antigravity\\scratch\\cinematic-portfolio\\public\\videos\\gym_2.mp4";

if (fs.existsSync(gym1Src)) {
  try {
    fs.copyFileSync(gym1Src, gym1Dest);
    console.log(`[Config Script] Copied Gym 1 video to ${gym1Dest}`);
  } catch (err) {
    console.error(`[Config Script] Error copying Gym 1: ${err}`);
  }
}
if (fs.existsSync(gym2Src)) {
  try {
    fs.copyFileSync(gym2Src, gym2Dest);
    console.log(`[Config Script] Copied Gym 2 video to ${gym2Dest}`);
  } catch (err) {
    console.error(`[Config Script] Error copying Gym 2: ${err}`);
  }
}

// Copy car delivery videos from D: drive if they exist
const del1Src = fs.existsSync("D:\\car deli1.MP4") ? "D:\\car deli1.MP4" : "D:\\car deli1.mp4";
const del2Src = fs.existsSync("D:\\car dilii2.MOV") ? "D:\\car dilii2.MOV" : "D:\\car dilii2.mov";

const del1Dest = "C:\\Users\\HP840G7\\.gemini\\antigravity\\scratch\\cinematic-portfolio\\public\\videos\\delivery_1.mp4";
const del2Dest = "C:\\Users\\HP840G7\\.gemini\\antigravity\\scratch\\cinematic-portfolio\\public\\videos\\delivery_2.mov";

if (fs.existsSync(del1Src)) {
  try {
    fs.copyFileSync(del1Src, del1Dest);
    console.log(`[Config Script] Copied Delivery 1 video to ${del1Dest}`);
  } catch (err) {
    console.error(`[Config Script] Error copying Delivery 1: ${err}`);
  }
}
if (fs.existsSync(del2Src)) {
  try {
    fs.copyFileSync(del2Src, del2Dest);
    console.log(`[Config Script] Copied Delivery 2 video to ${del2Dest}`);
  } catch (err) {
    console.error(`[Config Script] Error copying Delivery 2: ${err}`);
  }
}

// Copy brand promotion videos from D: drive if they exist
const promo1Src = fs.existsSync("D:\\brand promo 1.MOV") ? "D:\\brand promo 1.MOV" : "D:\\brand promo 1.mov";
const promo2Src = fs.existsSync("D:\\brand promo 2.MOV") ? "D:\\brand promo 2.MOV" : "D:\\brand promo 2.mov";

const promo1Dest = "C:\\Users\\HP840G7\\.gemini\\antigravity\\scratch\\cinematic-portfolio\\public\\videos\\commercial_1.mov";
const promo2Dest = "C:\\Users\\HP840G7\\.gemini\\antigravity\\scratch\\cinematic-portfolio\\public\\videos\\commercial_2.mov";

if (fs.existsSync(promo1Src)) {
  try {
    fs.copyFileSync(promo1Src, promo1Dest);
    console.log(`[Config Script] Copied Brand Promo 1 video to ${promo1Dest}`);
  } catch (err) {
    console.error(`[Config Script] Error copying Brand Promo 1: ${err}`);
  }
}
if (fs.existsSync(promo2Src)) {
  try {
    fs.copyFileSync(promo2Src, promo2Dest);
    console.log(`[Config Script] Copied Brand Promo 2 video to ${promo2Dest}`);
  } catch (err) {
    console.error(`[Config Script] Error copying Brand Promo 2: ${err}`);
  }
}

// Copy shoot videos from D: drive if they exist
const shoot1Src = fs.existsSync("D:\\shoot 1.MOV") ? "D:\\shoot 1.MOV" : "D:\\shoot 1.mov";
const shoot2Src = fs.existsSync("D:\\shoot 2.MOV") ? "D:\\shoot 2.MOV" : "D:\\shoot 2.mov";

const shoot1Dest = "C:\\Users\\HP840G7\\.gemini\\antigravity\\scratch\\cinematic-portfolio\\public\\videos\\wedding_1.mov";
const shoot2Dest = "C:\\Users\\HP840G7\\.gemini\\antigravity\\scratch\\cinematic-portfolio\\public\\videos\\wedding_2.mov";

if (fs.existsSync(shoot1Src)) {
  try {
    fs.copyFileSync(shoot1Src, shoot1Dest);
    console.log(`[Config Script] Copied Shoot 1 video to ${shoot1Dest}`);
  } catch (err) {
    console.error(`[Config Script] Error copying Shoot 1: ${err}`);
  }
}
if (fs.existsSync(shoot2Src)) {
  try {
    fs.copyFileSync(shoot2Src, shoot2Dest);
    console.log(`[Config Script] Copied Shoot 2 video to ${shoot2Dest}`);
  } catch (err) {
    console.error(`[Config Script] Error copying Shoot 2: ${err}`);
  }
}

// Copy automotive videos from D: drive if they exist
const auto1Src = fs.existsSync("D:\\unknown 1.MOV") ? "D:\\unknown 1.MOV" : "D:\\unknown 1.mov";
const auto2Src = fs.existsSync("D:\\unkown 2.MOV") 
  ? "D:\\unkown 2.MOV" 
  : (fs.existsSync("D:\\unknown 2.MOV") 
    ? "D:\\unknown 2.MOV" 
    : "D:\\unkown 2.mov");

const auto1Dest = "C:\\Users\\HP840G7\\.gemini\\antigravity\\scratch\\cinematic-portfolio\\public\\videos\\automotive_1.mov";
const auto2Dest = "C:\\Users\\HP840G7\\.gemini\\antigravity\\scratch\\cinematic-portfolio\\public\\videos\\automotive_2.mov";

if (fs.existsSync(auto1Src)) {
  try {
    fs.copyFileSync(auto1Src, auto1Dest);
    console.log(`[Config Script] Copied Automotive 1 video to ${auto1Dest}`);
  } catch (err) {
    console.error(`[Config Script] Error copying Automotive 1: ${err}`);
  }
}
if (fs.existsSync(auto2Src)) {
  try {
    fs.copyFileSync(auto2Src, auto2Dest);
    console.log(`[Config Script] Copied Automotive 2 video to ${auto2Dest}`);
  } catch (err) {
    console.error(`[Config Script] Error copying Automotive 2: ${err}`);
  }
}

// Copy ppf/automotive 3 video from D: drive if it exists
const auto3Src = fs.existsSync("D:\\ppf.MP4") ? "D:\\ppf.MP4" : "D:\\ppf.mp4";
const auto3Dest = "C:\\Users\\HP840G7\\.gemini\\antigravity\\scratch\\cinematic-portfolio\\public\\videos\\automotive_3.mp4";

if (fs.existsSync(auto3Src)) {
  try {
    fs.copyFileSync(auto3Src, auto3Dest);
    console.log(`[Config Script] Copied Automotive 3 video to ${auto3Dest}`);
  } catch (err) {
    console.error(`[Config Script] Error copying Automotive 3: ${err}`);
  }
}


const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
