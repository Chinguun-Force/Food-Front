import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center gap-[8%] px-[100px] items-center">
      {children}
      <Image
        alt="img"
        src={
          "https://res.cloudinary.com/dl3wkodkk/image/upload/v1742867934/Food-Delivery%20Assets/488bb31d983ecd581caec983f3a32842_wytjk8.jpg"
        }
        width={856}
        height={904}
        style={{objectFit: "cover"}}
        className="w-[860px] h-[904px] rounded-lg"
      />
    </div>
  );
}