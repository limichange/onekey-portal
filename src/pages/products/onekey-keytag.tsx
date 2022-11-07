import { graphql } from 'gatsby';

export { OneKeyKeyTag as default } from '../../components/pages/products/OneKeyKeyTag';

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["common", "product", "onekey-key-tag"] }
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
