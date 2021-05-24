import { connect } from "react-redux";
import { StyledGridContainer, StyledGridItem, Img } from "./Home.style";

const Home = ({ images }) => {
  console.log(images);
  return (
    <StyledGridContainer container>
      {images.map(({ id, link, name }) => (
        <StyledGridItem item xs={12} md={6} lg={3} key={id}>
          <Img src={link} alt={name} />
        </StyledGridItem>
      ))}
    </StyledGridContainer>
  );
};

const mapStateToProps = (state) => ({
  images: state.images.images,
});

export default connect(mapStateToProps)(Home);
