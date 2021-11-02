import { Grid } from "@material-ui/core/";
import Cards from "../card/Cards";
// import {amountDisplay} from 'utils/utils'
import UseStyles from "./UseStyles";

const RenderProducts = ({ productList, lg, md, sx }, forYou) => {
  const classes = UseStyles();
  console.log(forYou);

  return productList && productList.map(product =>
    <Grid item lg={lg} md={md} sx={sx}>
  
        <Cards
          key={forYou?.id}
          pid={forYou?.id}
          category={forYou?.attributes.category}
          imageLink={forYou?.thumbnail}
          name={forYou?.title}
          price={forYou?.price}
          review={'product.attributes.review'}
        />
    
    </Grid>
  )
}

export default RenderProducts;