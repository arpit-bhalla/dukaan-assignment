import React, { useEffect, useState, useRef } from "react";
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
            <div className="mb-1">Word for your slogan</div>

            <SloganSection />
          </div>
        </div>
      </Container>

      <div className="relative mt-20">
        <div className="bg-primary opacity-5 absolute h-full w-full" />
        <Container className="flex text-center py-16 gap-x-8">
          {features.map(([title, summary], index) => (
            <FeatureCard {...{ title, summary }} img={index + 1} key={index} />
          ))}
        </Container>
      </div>

      <Container className="py-20">
        <div className="mb-12 font-semibold text-4xl">
          Try our other free products
        </div>
        <div className="grid grid-cols-3 gap-8">
          {products.map(([title, summary], index) => (
            <ProductCard
              {...{ title, summary }}
              index={index + 1}
              key={index}
            />
          ))}
        </div>
      </Container>

      <footer className="bg-black text-white">
        <Container className="pt-16">
          <div className="flex mb-10 text-lg gap-x-5">
            <div style={{ flex: 2 }}>
              <img src={image} />
            </div>
            {footer.map((row, index) => (
              <div className="flex-1" key={index}>
                {row.map((item, index) => (
                  <a className="block" key={index}>
                    {item}{" "}
                    {item === "Jobs" ? (
                      <Badge
                        value={"3"}
                        className="bg-white text-black h-5 w-5"
                      />
                    ) : null}
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

const PaginationBadge = ({ selected = false, disabled = false, ...rest }) =>
  React.createElement(Badge, {
    className:
      "cursor-pointer h-6 w-6 " +
      (selected ? "bg-primary text-white" : "hover:bg-slate-100") +
      (disabled ? " hover:bg-white text-slate-500 cursor-default" : ""),
    ...rest,
  });

const Pagination = ({ onChange = (page: number) => {}, totalPages = 21 }) => {
  const [currPage, setCurrPage] = useState(2);

  const getPages = () => {
    if (currPage < 3) {
      return [1, 2, 3, "...", totalPages];
    }
    if (currPage >= totalPages - 2) {
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    }
    return [currPage - 1, currPage, currPage + 1, "...", totalPages];
  };

  function changePage(pageNumber: number) {
    setCurrPage(pageNumber);
    onChange?.(pageNumber);
  }

  return (
    <div className="flex justify-between text-primary mt-6">
      <div
        className={"cursor-pointer " + (currPage === 1 ? "invisible" : "")}
        onClick={() => (currPage > 1 ? changePage(currPage - 1) : undefined)}
      >
        &lsaquo; Prev
      </div>

      <div
        className="flex gap-1"
        onClick={(ev) => {
          const span = ev.target as HTMLSpanElement;
          const pageNumber = Number(span.dataset.page);
          if (isNaN(pageNumber)) return;
          changePage(pageNumber);
        }}
      >
        {getPages().map((pageNumber) => (
          <PaginationBadge
            value={pageNumber}
            key={pageNumber}
            disabled={pageNumber === "..."}
            selected={pageNumber === currPage}
            data-page={pageNumber}
          />
        ))}
      </div>
      <div
        className={
          "cursor-pointer " + (currPage === totalPages ? "invisible" : "")
        }
        onClick={() =>
          currPage < totalPages ? changePage(currPage + 1) : undefined
        }
      >
        Next &rsaquo;
      </div>
    </div>
  );
};

const Container = ({
  children,
  className,
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => (
  <div className={"container max-w-6xl mx-auto " + className}>{children}</div>
);

function SloganSection() {
  const searchQuery = useRef("cozy");
  const [slogans, setSlogans] = useState<string[]>([]);

  const fetchSlogan = async (pageNumber?: number) => {
    const fetchedSlogans = await sloganAPI(pageNumber);
    setSlogans(fetchedSlogans);
  };

  useEffect(() => {
    fetchSlogan();
  }, []);

  return (
    <div>
      <div>
        <input
          type={"search"}
          defaultValue={searchQuery.current}
          className="border py-2 px-4 w-80"
          onChange={(event) => (searchQuery.current = event.target.value)}
        />
      </div>
      <button
        className="bg-primary text-white py-2 px-6 rounded my-12"
        onClick={fetchSlogan.bind(null, 1)}
      >
        Generate slogans
      </button>
      <Hr />
      <div className="flex items-center mt-12">
        <div className="flex-grow">
          We have generated {Math.floor(Math.random() * 1e3)} slogans for “
          {searchQuery.current}”
        </div>
        <button className="border-primary border text-primary py-2 px-6 rounded-sm">
          Download all
        </button>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-8 mb-12">
        {slogans.map((slogan, index) => (
          <SloganCard title={slogan} key={index} />
        ))}
      </div>

      <Hr />
      <Pagination onChange={fetchSlogan} />
    </div>
  );
}

const Hr = () => (
  <div
    className="block  w-full"
    style={{ background: "#D9D9D9", height: "1px" }}
  />
);

function Badge({
  value = "",
  className = "bg-white text-black",
  size = 5,
  ...rest
}) {
  return (
    <span
      className={
        `inline-flex justify-center items-center rounded-xl text-sm w-${size} h-${size} ` +
        className
      }
      {...rest}
    >
      {value}
    </span>
  );
}

function ProductCard({
  title,
  summary,
  index,
}: {
  title: string;
  summary: string;
  index: number;
}) {
  return (
    <div>
      <img src={`/images/prod-${index}.png`} />
      <div className="text-xl mt-4 mb-1">{title}</div>
      <div className="text-slate-500">{summary}</div>
    </div>
  );
}

function FeatureCard({
  img,
  title,
  summary,
}: {
  img: number;
  title: string;
  summary: string;
}) {
  return (
    <div className="flex-1 flex flex-col items-center">
      <img src={`/images/feat-${img}.png`} className="w-14 mb-9" />
      <div className="text-xl">{title}</div>
      <div className="text-slate-500">{summary}</div>
    </div>
  );
}

const SloganCard = ({ title = "" }) => {
  return (
    <div
      style={{ backgroundColor: "#F2F2F2" }}
      className="px-4 py-2 cursor-pointer text-slate-900 h-16 flex items-center"
    >
      {title}
    </div>
  );
};

const footer = [
  ["Contact", "FAQ's"],
  ["Tutorials", "Blog"],
  ["Privacy", "Banned Items"],
  ["About", "Jobs"],
  ["Facebook", "Twitter", "Linkedin"],
];

const features = [
  [
    "Search",
    "Simply add a keyword or a term related to your business in the slogan maker search box. Wait for the magic to happen.",
  ],
  [
    "Select",
    "Choose from thousands of options generated by the slogan maker that fit your needs.",
  ],
  ["Stand out", "Congrats on your new slogan. It's time to win the world!"],
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

const slogans = [
  "There is no Sore it will Not Heal, No cool it will not Subdue.",
  "Review the facts cool is the best.",
  "coziness building for tomorrow",
];

const sloganAPI = (pageNumber?: number) =>
  new Promise<string[]>((resolve, reject) => {
    const arr: string[] = Array.from({ length: 18 });
    resolve(
      arr.map(() => {
        return slogans[Math.floor(Math.random() * slogans.length)];
      })
    );
  });
