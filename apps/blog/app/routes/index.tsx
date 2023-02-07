import { Image } from "ui/Image";

export default function Index() {
  return (
    <div className="container">
      <h1 className="title">
        Blog <br />
        <span>Kitchen Sink</span>
      </h1>
      <Image src="https://placekitten.com/200/300" />
      <p className="description">
        Built With{" "}
      </p>
    </div>
  );
}
