import { connect } from "react-redux";
import { StyledGridContainer, StyledGridItem, Img } from "./Home.style";

const Home = ({ images }) => {
  return (
    <StyledGridContainer container>
      {images.map(({ id, img, name }) => (
        <StyledGridItem item xs={12} md={6} lg={3} key={id}>
          <Img src={img} alt={name} />
        </StyledGridItem>
      ))}
    </StyledGridContainer>
  );
};

const mapStateToProps = (state) => ({
  images: state.images.images,
});

export default connect(mapStateToProps)(Home);
