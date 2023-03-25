import React from "react";
import image from "./assets/logo/white.svg";

function App() {
  return (
    <section className="">
      <div className="bg-primary block h-80 absolute w-screen -z-10" />
      <Container className="pt-5">
        <div className="flex red text-white items-center mb-16">
          <div className="flex-1">
            <img src={image} />
          </div>
          <a className="mr-8 text-lg cursor-pointer">Sign In</a>
          <a className="bg-white text-primary px-6 py-3 rounded cursor-pointer text-lg">
            Dukaan for PC
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <div className="container max-w-3xl mx-auto py-16 ">
            <div className="text-4xl font-semibold">Free slogan maker</div>
            <div className="text-xl mb-12 text-slate-500 mt-4">
              Simply enter a term that describes your business, and get up to
              1,000 relevant slogans for free.
            </div>
            <div className="">Word for your slogan</div>
            <div>
              <input className="border-2 py-2 px-4" />
            </div>
            <button className="bg-primary text-white py-2 px-6 rounded-sm my-12">
              Generate slogans
            </button>
            <div className="flex items-center">
              <div className="flex-grow">
                We have generated 1,023 slogans for “cozy”
              </div>
              <button className="border-primary border text-primary py-2 px-6 rounded-sm">
                Download all
              </button>
            </div>
            <div className="flex justify-between text-primary">
              <div>&lsaquo; Prev</div>
              <div className="flex gap-1">
                <PaginationBadge value={1} />
                <PaginationBadge value={2} selected />
                <PaginationBadge value={3} />
                <PaginationBadge value={"..."} />
                <PaginationBadge value={21} />
              </div>
              <div>Next &rsaquo;</div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative mt-20">
        <div className="bg-primary opacity-5 absolute h-full w-full" />
        <Container className="flex text-center py-16">
          {features.map(([img, title, summary], index) => (
            <FeatureCard {...{ img, title, summary }} key={index} />
          ))}
        </Container>
      </div>

      <Container className="py-20">
        <div className="mb-12 font-semibold text-4xl">
          Try our other free products
        </div>
        <div className="grid grid-cols-3 gap-8">
          {products.map(([title, summary], index) => (
            <ProductCard {...{ title, summary }} key={index} />
          ))}
        </div>
      </Container>

      <footer className="bg-black text-white">
        <Container className="pt-16">
          <div className="flex mb-10">
            <div className="w-80">
              <img src={image} />
            </div>
            {footer.map((row) => (
              <div className="flex-1">
                {row.map((item) => (
                  <a className="block">
                    {item} {item === "Jobs" ? <Badge value={3} /> : null}
                  </a>
                ))}
              </div>
            ))}
          </div>
          <div className="flex py-6">
            <div className="flex-grow">Dukaan 2020, All rights reserved.</div>
            <div>Made in 🇮🇳</div>
          </div>
        </Container>
      </footer>
    </section>
  );
}

export default App;

const PaginationBadge = ({ selected = false, ...rest }) =>
  React.createElement(Badge, {
    className:
      "cursor-pointer " +
      (selected ? "bg-primary text-white" : "hover:bg-slate-100"),
    size: 6,
    ...rest,
  });

const Container = ({
  children,
  className,
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => (
  <div className={"container max-w-6xl mx-auto " + className}>{children}</div>
);

function Badge({ value = "", className = "bg-white text-black", size = 5 }) {
  return (
    <span
      className={
        `inline-flex justify-center items-center rounded-xl text-sm w-${size} h-${size} ` +
        className
      }
    >
      {value}
    </span>
  );
}

function ProductCard({ title, summary }) {
  return (
    <div>
      <img />
      <div className="text-xl">{title}</div>
      <div className="text-slate-500">{summary}</div>
    </div>
  );
}

function FeatureCard({ img, title, summary }) {
  return (
    <div className="flex-1">
      <img src={img} />
      <div className="text-xl">{title}</div>
      <div className="text-slate-500">{summary}</div>
    </div>
  );
}

const footer = [
  ["Contact", "FAQ's"],
  ["Tutorials", "Blog"],
  ["Privacy", "Banned Items"],
  ["About", "Jobs"],
  ["Facebook", "Twitter", "Linkedin"],
];

const features = [
  [
    "",
    "Search",
    "Simply add a keyword or a term related to your business in the slogan maker search box. Wait for the magic to happen.",
  ],
  [
    "",
    "Select",
    "Choose from thousands of options generated by the slogan maker that fit your needs.",
  ],
  ["", "Stand out", "Congrats on your new slogan. It's time to win the world!"],
];

const products = [
  [
    "Privacy Policy Generator",
    "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  ],
  [
    "Terms & Conditions Generator",
    "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  ],
  [
    "Domain Name Generator",
    "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  ],
  [
    "Invoice Generator",
    "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  ],
];
