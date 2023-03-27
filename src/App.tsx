import image from "./assets/logo/white.svg";
import { Badge } from "./components/Badge";
import { Container } from "./components/Container";
import { FeatureCard } from "./components/FeatureCard";
import { features, products, footer } from "./data";
import { ProductCard } from "./components/ProductCard";
import { SloganSection } from "./components/SloganSection";

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

        <div className="bg-white rounded-lg shadow-md p-2 md:p-0">
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
        <Container className="grid grid-cols-1 md:grid-cols-3 text-center py-16 md:gap-x-8 gap-y-8">
          {features.map(([title, summary], index) => (
            <FeatureCard {...{ title, summary }} img={index + 1} key={index} />
          ))}
        </Container>
      </div>

      <Container className="py-20 p-2 md:px-0">
        <div className="mb-12 font-semibold text-4xl ">
          Try our other free products
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          <div className="flex mb-10 text-lg gap-x-5 flex-col px-6 md:flex-row md:px-0">
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
