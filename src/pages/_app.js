import React from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import store from "app/redux/store";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css";
import "../styles/index.css";
import "react-rater/lib/react-rater.css";
import "app/styles/AnimatedRater.css";

const MyApp = ({ Component, pageProps, store }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
