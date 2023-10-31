export default function Bootstrap() {
  return (
    <>
      <div className="container pt-5">
        <h1>Hello, Bootstrap and Vite!</h1>
        <button className="btn btn-danger">Primary button</button>
      </div>

      <div className="row mt-3 mb-3">
        <div className="col-sm-4 bg-black text-white text-center">Column 1</div>
        <div className="col-sm-8 bg-primary text-white text-center">Column-2</div>
      </div>

      <div className="container mt-3">
        <h1>Blockquotes</h1>
        <p>The blockquote element is used to present content from another source:</p>
        <blockquote className="blockquote">
          <p>For 50 years, <abbr title="World Wide Fund for Nature">WWF</abbr>  has been protecting the future of nature. The world&apos; leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</p>
          <footer className="blockquote-footer">From WWF&apos; website</footer>
        </blockquote>
      </div>
    </>
  )
}