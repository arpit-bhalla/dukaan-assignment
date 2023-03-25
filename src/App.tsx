import React from "react";
import image from "./assets/logo/white.svg";

function App() {
  return (
    <section className="">
      <div className="bg-primary block h-80 absolute w-screen -z-10" />
      <Container>
        <div className="flex red text-white items-center mb-16">
          <div className="flex-1">
            <img src={image} />
          </div>
          <a className="mr-8">Sign In</a>
          <a className="bg-white text-primary px-6 py-3 rounded-sm">
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
          </div>
        </div>
      </Container>

      <div className="relative mt-20">
        <div className="bg-primary opacity-5 absolute h-full w-full" />
        <Container className="flex text-center">
          <Card />
          <Card />
          <Card />
        </Container>
      </div>
      <Container>
        <div>Try our other free products</div>
        <div>
          <div>
            <img />
            <div>Privacy Policy Generator</div>
            <div>
              Stock your store with 100s of products and start selling to
              customers in minutes, without the hassle of inventory or
              packaging.
            </div>
          </div>
        </div>
      </Container>
      <footer className="bg-black text-white">
        <Container>
          <div className="flex mt-16 mb-10">
            <div className="w-80">
              <img src={image} />
            </div>
            {footer.map((row) => (
              <div className="flex-1">
                {row.map((item) => (
                  <a className="block">
                    {item}{" "}
                    {item === "Jobs" ? (
                      <span className="bg-white rounded-xl text-black w-5 text-sm text-center h-5 inline-block">
                        3
                      </span>
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

const Container = ({
  children,
  className,
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => (
  <div className={"container max-w-6xl mx-auto pt-5 " + className}>
    {children}
  </div>
);

function Card() {
  return (
    <div className="py-20">
      <img />
      <div>Search</div>
      <div>
        Simply add a keyword or a term related to your business in the slogan
        maker search box. Wait for the magic to happen.
      </div>
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
