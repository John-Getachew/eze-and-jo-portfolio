import {
  LeftQuote,
  TestimonialCardRoot,
  RightQuote,
  ProfileImage,
} from "./style";

const TestimonialCard = ({ image }) => {
  return (
    <TestimonialCardRoot>
      <ProfileImage image={image} />
      <p>
        <LeftQuote />
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which dont look even slightly believable.{" "}
        <RightQuote />
      </p>
      <h3>Brad Irving</h3>
      <h4>General Manager at IMR</h4>
    </TestimonialCardRoot>
  );
};

export default TestimonialCard;
