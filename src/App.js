
import React, { useEffect, useState } from "react";
import { BuilderComponent, builder, Builder, useIsPreviewing } from "@builder.io/react";
import LogoGrid from "./components/LogoGrid";
import IconCardList from "./components/IconCardList";
import Footer from "./components/Footer";
import QuickLinkCardPatterns from "./components/QuickLinkCard";

// Put your API key here
builder.init('8c4022b1afc64438b60affc1c3ad7e13');

// set whether you're using the Visual Editor,
// whether there are changes,
// and render the content if found
export default function CatchAllRoute() {
  const isPreviewingInBuilder = useIsPreviewing();
  const [notFound, setNotFound] = useState(false);
  const [content, setContent] = useState(null);

  // get the page content from Builder
   useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get("page", {
          url: window.location.pathname
        })
        .promise();

      setContent(content);
      setNotFound(!content);

      // if the page title is found, 
      // set the document title
      if (content?.data.title) {
       document.title = content.data.title
      }
    }
    fetchContent();
  }, [window.location.pathname]);
  
  // If no page is found, return 
  // a 404 page from your code.
  // The following hypothetical 
  // <FourOhFour> is placeholder.
  if (notFound && !isPreviewingInBuilder) {
    return null;
  }
  const links =[
    {
      linkHref: '#',
      linkIcon: 'twitter',
    },
    {
      linkHref: '#',
      linkIcon: 'linkedin',
    },
    {
      linkHref: '#',
      linkIcon: 'facebook',
    },
    {
      linkHref: '#',
      linkIcon: 'github',
    },
  ];

  // return the page when found
  return (
    <>
    <space-header
        logo-src="https://i.ibb.co/k5sYcwt/logo.png"
        logo-alt="logo"
        cta-text-one="Log in"
        cta-text-two="Sign up"
      >
        <space-header-menu-item
          slot="subMenu"
          label="Home"
        ></space-header-menu-item>
        <space-header-menu-item slot="subMenu" label="Resources">
          <div>
            <p>children</p>
          </div>
        </space-header-menu-item>
        <space-header-menu-item slot="subMenu" label="Blog">
        </space-header-menu-item>
        <space-header-menu-item slot="subMenu" label="About">
        </space-header-menu-item>
        <space-header-menu-item slot="subMenu" label="Contact">
        </space-header-menu-item>
      </space-header>
      {/* Render the Builder page */}
      <BuilderComponent model="page" api-key="8c4022b1afc64438b60affc1c3ad7e13" />        
      <Footer
          linkOptions={[
            {
              heading: 'Product',
              options: Array(6).fill({
                navigationText: 'Overview',
                navigationHref: '#',
              }),
            },
            {
              heading: 'Company',
              options: Array(6).fill({
                navigationText: 'Overview',
                navigationHref: '#',
              }),
            },
            {
              heading: 'Resources',
              options: Array(6).fill({
                navigationText: 'Overview',
                navigationHref: '#',
              }),
            },
            {
              heading: 'Use Cases',
              options: Array(6).fill({
                navigationText: 'Overview',
                navigationHref: '#',
              }),
            },
            {
              heading: 'Social',
              options: Array(6).fill({
                navigationText: 'Overview',
                navigationHref: '#',
              }),
            },
            
          ]}
          background={true}
          footer-text="© 2021 SPACE. All rights reserved."
          logo-src="https://i.ibb.co/X4hf7G6/logo.png"
          logo-alt="logo"
          supportive-text="Design amazing digital experiences that create more happy in the world."
          socialLinkOptions={links}
        >
        </Footer>
    </>
  );
}

Builder.registerComponent('space-label', { 
  name: 'SpaceLabel',
  inputs: [{ name: 'label', type: 'text' }, { name: 'icon-name'}],
})

Builder.registerComponent('space-link', { 
  name: 'SpaceLink',
  inputs: [{ name: 'href', type: 'text' }, { name: 'iconname'}, { name: 'link-size'}],
})

Builder.registerComponent('space-section-heading', { 
  name: 'SpaceSectionHeading',
  inputs: [{ name: 'size'}, { name: 'head-text'}, { name: 'support-text'}, { name: 'sub-heading'}, { name: 'orientation'}],
})

Builder.registerComponent('space-stats', { 
  name: 'SpaceStats',
  inputs: [{ name: 'size'}, { name: 'sub-heading'}, { name: 'support-text'}, { name: 'heading-text'}, { name: 'orientation'}],
})

Builder.registerComponent('space-image', { 
  name: 'SpaceImage',
  inputs: [{ name: 'alt'}, { name: 'src'}],
})

Builder.registerComponent(LogoGrid, { 
  name: 'SpaceLogoGrid',
  inputs: [{ name: 'type', type: 'string'}, { name: 'title', type: 'string'}, { name: 'description', type: 'string'}, { name: 'options', type: 'list',
  subFields: [
    {
      name: 'src',
      type: 'string'
    },
    {
      name: 'alt',
      type: 'string'
    }
  ]
 }],
})

Builder.registerComponent('space-icon-card', { 
  name: 'SpaceIconCard',
  inputs: [{ name: 'cta-href'}, { name: 'cta-text'}, { name: 'head-text'}, { name: 'icon-name'}, { name: 'alignment'}, { name: 'support-text'}],
})

Builder.registerComponent('space-contact-header', { 
  name: 'SpaceContactHeader',
  inputs: [{ name: 'title'}, { name: 'support-text'}, { name: 'sub-title'}, { name: 'first-name-label'}, { name: 'first-name-placeholder'}, { name: 'last-name-label'}, { name: 'last-name-placeholder'}, { name: 'email-label'}, { name: 'email-placeholder'}, { name: 'phone-label'}, { name: 'phone-placeholder'}, { name: 'button-text'}, { name: 'center', type: 'boolean'}],
})

Builder.registerComponent(QuickLinkCardPatterns, { 
  name: 'SpaceQuickLinkCardPattern',
  inputs: [
    {
      name: 'type',
      defaultValue: 'carousel'
    },
    {
      name: 'size',
      defaultValue: 'md'
    },
    {
      name: 'color',
      defaultValue: 'light'
    },
    {
      name: 'options',
      type: 'list',
      subFields: [
        {
          name: 'src',
          type: 'string',
        },
        {
          name: 'alt',
          type: 'string',
        },
        {
          name: 'ctaText',
          type: 'string',
        },
        {
          name: 'ctaIconName',
          type: 'string',
        },
        {
          name: 'headingText',
          type: 'string',
        },
        {
          name: 'supportText',
          type: 'string',
        },
      ]
    },
  ]
})

Builder.registerComponent('space-media-pattern', { 
  name: 'SpaceMediaCardPattern',
  tag: 'space-media-pattern',
  inputs: [{ name: 'type'}, { name: 'size'}, { name: 'orientation'}, { name: '.options', type: 'list',
  subFields: [
    {
      name: 'mediaFirst',
      type: 'boolean',
    },
    {
      name: 'container',
      type: 'boolean',
    },
    {
      name: 'subHeadingText',
      type: 'string',
    },
    {
      name: 'headingText',
      type: 'string',
    },
    {
      name: 'supportText',
      type: 'string',
    },
    {
      name: 'src',
      type: 'string',
    },
  ]
 }],
})

Builder.registerComponent(IconCardList, {
  name: 'SpaceIconCardPatterns',
  inputs: [{ name: 'type'}, { name: 'alignment'}, { name: 'options', type: 'list',
  subFields: [
    {
      name: 'iconName',
      type: 'string',
    },
    {
      name: 'headText',
      type: 'string',
    },
    {
      name: 'ctaText',
      type: 'string',
    },
    {
      name: 'ctaHref',
      type: 'string',
    },
    {
      name: 'supportText',
      type: 'string',
    }
  ]
  }]
});
