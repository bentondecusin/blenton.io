const academic_bg =
  "I received B.S. and M.Eng in Computer Science from Cornell University, where I was fortunate to be advised by Lorenzo Alvisi and Sainyam Galhotra";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Benton Li
      </h1>
      <p className="mb-2">
        I'm a quant developer and database system researcher based in London 🇬🇧
      </p>
      <p className="mb-2">
        At work, my specializations span from fixed income (rates & credits) to
        xVA. I also know a thing or two about regulation framework (Basel IV,
        UMR, SIMM, FRTB, etc)
      </p>
      <p className="mb-2">
        In academia, my research interests mainly lie in causal inference,
        causal discovery algorithm, and their application in finance.
      </p>
      <p className="mb-2">
        I'm also good at multitasking, in both parallel computing and real life
        :))
      </p>

      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  );
}
