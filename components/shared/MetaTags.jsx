// import React from "react";
//
// const MetaTags = ({ meta, ...other }) => {
//     const { asPath } = useRouter()
//     const ogImage = meta?.og_image || `/`
//     return (
//         <NextSeo
//             {...meta}
//             openGraph={{
//                 url: `${SITE_DOMAIN}${asPath}`,
//                 title: meta?.og_title || meta?.title,
//                 description: meta?.og_description || meta?.description,
//                 images: [
//                     {
//                         url: ogImage.indexOf(`//`) > -1
//                             ? ogImage
//                             : `${SITE_DOMAIN}/${ogImage}`,
//                         width: 800,
//                         height: 600,
//                     },
//                 ],
//                 ...meta?.openGraph,
//             }}
//             {...other}
//         />
//     )
// }

// export default MetaTags
