"use client";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface Props {
  variant?: "color" | "white";
}
export const Logo: FC<Props> = ({ variant = "color" }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  if (variant === "color")
    return (
      <svg
        width="74"
        height="36"
        viewBox="0 0 74 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer"
        onClick={handleClick}
      >
        <g clipPath="url(#clip0_12_155789)">
          <path
            d="M8.6779 24.1317H2.69584L0.012207 35.8024H3.06423L4.07425 31.4112H5.65028L8.36806 35.8024H11.7104L8.66326 31.1551C11.3664 30.4525 12.2862 29.0034 12.4569 27.4543C12.6277 25.9052 11.7641 24.1293 8.67546 24.1293L8.6779 24.1317ZM9.4098 27.6227C9.28294 28.7644 8.21193 29.4377 6.72617 29.4377H4.53047L5.34532 25.9174H7.66056C8.88771 25.9174 9.52691 26.5176 9.40736 27.6227H9.4098ZM17.2167 24.1342H20.2883L19.5735 27.2323L17.5973 35.7975H14.4916L17.2167 24.1342ZM43.1894 23.4877L43.2114 35.7951H40.2838L40.3155 27.0128L34.0968 35.7951H31.2595L28.6856 26.964L24.565 35.7951H21.1617L27.2486 22.9851C27.6902 22.1581 28.1172 21.7898 28.9564 21.7849C29.5127 21.7849 30.1177 22.1045 30.3934 23.0754L33.0502 32.6847L39.9617 22.8632C40.5497 22.0313 41.045 21.7776 41.7281 21.7947C42.46 21.8142 43.1919 22.2948 43.1919 23.4877H43.1894ZM63.8998 30.233C63.6924 32.1089 65.1196 33.5873 67.6178 33.6239C68.8455 33.6581 70.0706 33.4933 71.2456 33.136L70.6527 35.6999C69.6419 35.8874 68.6166 35.9854 67.5885 35.9927C62.675 35.9927 60.3915 33.5531 60.7575 30.1744C61.1722 26.359 64.5389 23.7926 69.8428 23.7926C70.9691 23.8094 72.0907 23.9419 73.19 24.1878L72.6533 26.5371C71.6149 26.2871 70.5497 26.1658 69.4817 26.176C66.3882 26.1516 64.1779 27.6959 63.9022 30.233H63.8998ZM51.2306 31.4356L54.0874 27.4031L54.9803 31.4356H51.2306ZM56.0245 35.7975H58.9911L56.1514 25.6369C55.7805 24.4049 55.0511 24.0805 54.2923 24.1464C53.8166 24.1878 53.3165 24.3903 52.8139 25.11L45.4461 35.7999H48.4689L49.9668 33.4092H55.4585L56.0294 35.8073L56.0245 35.7975ZM61.243 9.69464C60.6208 9.90687 33.1673 17.5011 32.7647 17.5962C32.492 17.6812 32.2017 17.6925 31.9232 17.6291C31.6448 17.5657 31.388 17.4298 31.1789 17.2352C30.447 16.5692 30.7471 15.6446 30.9545 15.1762C31.1985 14.6249 36.4852 3.50313 36.4852 3.50313L15.3797 12.3513C14.4989 12.6587 14.1989 11.9341 14.1989 11.9341C14.1989 11.9341 13.8305 11.1315 14.7917 10.6778L37.9685 0.26833C38.3491 0.0975639 39.0639 -0.23909 39.6202 0.26833C40.1764 0.77575 39.9593 1.54176 39.7885 2.01503C39.7056 2.23946 35.9095 12.7831 35.9095 12.7831C35.9095 12.7831 58.5032 3.08842 59.2351 2.81275C60.6672 2.26874 61.97 2.59075 62.8946 3.66902C63.307 4.16244 63.5944 4.74799 63.7324 5.37606C63.8705 6.00413 63.8551 6.65622 63.6875 7.27707C63.3679 8.36754 62.6628 9.20185 61.2478 9.68488L61.243 9.69464Z"
            fill="#F7052D"
          />
        </g>
        <defs>
          <clipPath id="clip0_12_155789">
            <rect width="73.19" height="36" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  return (
    <>
      <svg
        className="block md:hidden cursor-pointer"
        width="138"
        height="20"
        viewBox="0 0 138 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleClick}
      >
        <path
          d="M115.436 4.79274C114.87 4.83792 114.284 5.07287 113.676 5.859L104.927 17.6751H108.522L110.306 15.0306H116.837L117.514 17.6811H121.024L117.645 6.44934C117.189 5.07286 116.323 4.71443 115.436 4.79274ZM111.816 12.8528L115.211 8.39509L116.274 12.8528H111.816Z"
          fill="white"
        />
        <path
          d="M133.561 6.97239C134.834 6.96217 136.104 7.09652 137.345 7.37273L138 4.77522C136.683 4.50741 135.343 4.36431 133.999 4.34784C127.646 4.34784 123.615 7.18307 123.119 11.3999C122.681 15.1352 125.415 17.8261 131.302 17.8261C132.533 17.8198 133.762 17.7122 134.975 17.5041L135.686 14.6686C134.274 15.0646 132.809 15.2454 131.342 15.2045C128.348 15.1624 126.639 13.5279 126.887 11.4571C127.212 8.64586 129.857 6.9453 133.561 6.97239Z"
          fill="white"
        />
        <path
          d="M100.523 2.18604C99.7077 2.16492 99.1121 2.44548 98.4124 3.36866L90.1625 14.2448L86.9877 3.60406C86.6577 2.52702 85.9335 2.16793 85.2705 2.17396C84.2652 2.17396 83.7581 2.5874 83.2265 3.50153L75.9512 17.6811H80.0212L84.9437 7.9001L88.0204 17.6811H91.4029L98.837 7.95756L98.8003 17.6811H102.293L102.265 4.05056C102.274 2.7382 101.397 2.20716 100.523 2.18604Z"
          fill="white"
        />
        <path
          d="M68.0488 17.6812H71.7363L74.0785 8.10418L74.9269 4.6377H71.2848L68.0488 17.6812Z"
          fill="white"
        />
        <path
          d="M61.049 4.6377H53.9717L50.7805 17.6812H54.41L55.6199 12.7834H57.483L60.7014 17.6812H64.6543L61.049 12.4882C64.249 11.7029 65.3378 10.0865 65.5375 8.35442C65.7371 6.62238 64.7027 4.6377 61.049 4.6377ZM61.9112 8.54007C61.763 9.81551 60.4955 10.5674 58.7322 10.5674H56.1462L57.1112 6.63459H59.8333C61.3002 6.63459 62.0534 7.3042 61.9112 8.54007Z"
          fill="white"
        />
        <path
          d="M45.7834 3.93904C45.5468 3.49666 45.225 3.10492 44.8362 2.78619C44.4473 2.46747 43.9991 2.22798 43.5172 2.08144C43.0352 1.9349 42.529 1.88412 42.0273 1.93208C41.5257 1.98003 41.0383 2.12576 40.5933 2.36091L21.7349 12.3756L25.612 1.95741L25.652 1.84806C25.7466 1.59164 25.762 1.31301 25.6967 1.04773C25.6313 0.782451 25.488 0.542645 25.2849 0.358685C25.0819 0.174725 24.8284 0.0550084 24.5566 0.0149041C24.2848 -0.0252002 24.0071 0.0160647 23.759 0.133449L0.482765 11.177C0.281005 11.2772 0.126051 11.4512 0.0504536 11.6624C-0.0251439 11.8737 -0.0154564 12.1057 0.0772867 12.3101C0.17003 12.5145 0.338719 12.6753 0.548059 12.7588C0.757399 12.8423 0.990964 12.842 1.2001 12.7581L21.35 4.18488L14.9968 16.5423C14.8411 16.848 14.7528 17.1832 14.738 17.5255C14.7233 17.8678 14.7824 18.2093 14.9112 18.5271C15.0298 18.8153 15.2044 19.0775 15.425 19.2986C15.6455 19.5198 15.9079 19.6954 16.1969 19.8158C16.4858 19.9361 16.7956 19.9987 17.1089 20C17.4221 20.0012 17.7325 19.941 18.0224 19.8229L18.2696 19.7229L43.8693 9.28928C43.9897 9.24211 44.1068 9.18736 44.2202 9.12539C45.1191 8.64339 45.7887 7.82644 46.0818 6.85392C46.3749 5.8814 46.2676 4.83293 45.7834 3.93904Z"
          fill="white"
        />
      </svg>
      <svg
        width="86"
        height="42"
        viewBox="0 0 86 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden md:block"
      >
        <g clipPath="url(#clip0_6995_140597)">
          <path
            d="M10.1242 28.1537H3.14513L0.0142212 41.7695H3.57491L4.75327 36.6465H6.59197L9.76272 41.7695H13.6621L10.1071 36.3476C13.2608 35.528 14.3338 33.8374 14.5331 32.0301C14.7323 30.2228 13.7247 28.1508 10.1214 28.1508L10.1242 28.1537ZM10.9781 32.2265C10.8301 33.5584 9.58056 34.344 7.84718 34.344H5.28553L6.23619 30.237H8.9373C10.369 30.237 11.1147 30.9372 10.9752 32.2265H10.9781ZM20.0862 28.1565H23.6696L22.8357 31.7711L20.5302 41.7638H16.9069L20.0862 28.1565ZM50.3876 27.4023L50.4133 41.7609H46.9977L47.0347 31.5149L39.7796 41.7609H36.4693L33.4665 31.458L28.6592 41.7609H24.6886L31.7901 26.816C32.3052 25.8512 32.8033 25.4214 33.7825 25.4157C34.4314 25.4157 35.1373 25.7886 35.4589 26.9213L38.5585 38.1321L46.622 26.6737C47.308 25.7032 47.8858 25.4072 48.6827 25.4271C49.5366 25.4499 50.3905 26.0106 50.3905 27.4023H50.3876ZM74.5497 35.2718C74.3078 37.4605 75.9728 39.1852 78.8874 39.2279C80.3197 39.2678 81.749 39.0756 83.1199 38.6587L82.4282 41.6499C81.2489 41.8687 80.0526 41.983 78.8533 41.9915C73.1209 41.9915 70.4567 39.1454 70.8837 35.2035C71.3676 30.7522 75.2954 27.7581 81.4832 27.7581C82.7973 27.7777 84.1059 27.9322 85.3883 28.2192L84.7621 30.96C83.5507 30.6683 82.308 30.5268 81.062 30.5387C77.4529 30.5103 74.8742 32.3119 74.5526 35.2718H74.5497ZM59.769 36.6749L63.102 31.9703L64.1437 36.6749H59.769ZM65.3619 41.7638H68.823L65.5099 29.9097C65.0773 28.4725 64.2262 28.0939 63.3411 28.1708C62.786 28.2192 62.2025 28.4554 61.6162 29.295L53.0205 41.7666H56.547L58.2946 38.9774H64.7016L65.3676 41.7752L65.3619 41.7638ZM71.4501 11.3104C70.7243 11.558 38.6951 20.418 38.2255 20.529C37.9074 20.6281 37.5687 20.6413 37.2438 20.5673C36.9189 20.4934 36.6193 20.3348 36.3754 20.1077C35.5215 19.3308 35.8716 18.2521 36.1136 17.7056C36.3982 17.0624 42.5661 4.08701 42.5661 4.08701L17.9429 14.4098C16.9154 14.7684 16.5653 13.9232 16.5653 13.9232C16.5653 13.9232 16.1355 12.9868 17.257 12.4574L44.2966 0.313072C44.7406 0.113845 45.5746 -0.278918 46.2235 0.313072C46.8725 0.905063 46.6192 1.79874 46.4199 2.35088C46.3232 2.61273 41.8944 14.9136 41.8944 14.9136C41.8944 14.9136 68.2537 3.60317 69.1076 3.28156C70.7784 2.64688 72.2983 3.02257 73.377 4.28054C73.8582 4.8562 74.1935 5.53934 74.3545 6.27209C74.5155 7.00484 74.4976 7.76561 74.3021 8.48994C73.9292 9.76215 73.1066 10.7355 71.4558 11.299L71.4501 11.3104Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_6995_140597">
            <rect width="85.3883" height="42" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
