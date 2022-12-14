import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { forwardRef } from "react";
import { Helmet } from "react-helmet-async";

export const Page = forwardRef(({ children, title = "", meta, ...other }, ref) => (
    <>
      <Helmet>
        <title>{title}</title>
        {meta}
      </Helmet>
      <Box ref={ref} {...other}>
        {children}
      </Box>
    </>
  )
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};
