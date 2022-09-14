import { graphql } from 'gatsby';

export { OneKeyClassic as default } from '../../components/pages/products/OneKeyClassic';

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["common", "product", "onekey-classic-hardware-wallet"] }
        language: { eq: $language }
      }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
