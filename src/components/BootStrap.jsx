export default function Bootstrap() {
  return (
    <>
      <div className="container pt-5">
        <h1>Hello, Bootstrap and Vite!</h1>
        <button className="btn btn-danger">Primary button</button>
      </div>

      <div className="row mt-3 mb-3">
        <div className="col-sm-4 bg-black text-white text-center">Column 1</div>
        <div className="col-sm-4 bg-primary text-white text-center">Column-2</div>
        <div className="col-sm-4 bg-danger text-white text-center">Column-3</div>
      </div>
    </>
  )
}