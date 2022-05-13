import React from "react";

class ImageWithStatusText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageStatus: "loading" };
  }

  handleImageLoaded() {
    this.setState({ imageStatus: "loaded" });
  }

  handleImageErrored() {
    this.setState({ imageStatus: "failed to load" });
  }

  render() {
    return (
      <div>
        <img
          src={"https://firebasestorage.googleapis.com/v0/b/walkthrough-staging.appspot.com/o/private%2Fuser%2F7I2YFilf9Mhrh7U2qLA5zdRnkgo2%2Fheader-bg_bzrvsFzMhqyw.png?alt=media&token=1ac5b55f-98a1-4a9a-b3e0-e3b70dcb86fb"}
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
          alt="img"
        />
        {this.state.imageStatus}
      </div>
    );
  }
}
export default ImageWithStatusText;