
import React, { useEffect } from 'react'
import { Section } from '../components/container'
import ff_img from "../assets/images/collections/fantastic_filter.jpg"
import ff_img_webp from '../assets/images/collections/fantastic_filter.webp'
import chisc_img from '../assets/images/collections/chisc.jpg'
import chisc_img_webp from '../assets/images/collections/chisc.webp'
import Image from '../utils/image'
import '../css/photography.css'
import { EmbedInstagramFeed } from "@nocodeapi/embed-instagram-feed"
import { css } from "lit-element";
import 'lazysizes';


class MyFeed extends EmbedInstagramFeed {
    static get styles() {
        return css`
          .nc-section {
            font-family: "Avenir", -apple-system, BlinkMacSystemFont, "Segoe UI",
              Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol";
            background: rgba(0, 0, 0, 0);
            padding: 1rem;
            text-shadow: 1px 1px 1px rgb(0 0 0 / 70%);
          }
          .nc-section a {
            text-decoration: none;
          }
          .nc-container {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          @media (min-width: 640px) {
            .nc-container {
              max-width: 640px;
            }
          }
          @media (min-width: 768px) {
            .nc-container {
              max-width: 768px;
            }
          }
          @media (min-width: 1024px) {
            .nc-container {
              max-width: 1024px;
            }
          }
          @media (min-width: 1280px) {
            .nc-container {
              max-width: 1280px;
            }
          }
          @media (min-width: 1536px) {
            .nc-container {
              max-width: 1536px;
            }
          }
    
          .nc-title, .nc-subtitle {
            display: none;
          }
          .nc-title img {
            width: 38px;
            height: 38px;
            margin-right: 4px;
          }
    
          .nc-title p {
            font-size: 1.875rem;
            line-height: 2.25rem;
            color: #2d3748;
            font-weight: 600;
            margin: 0;
          }
    
          .nc-subtitle,
          .nc-caption {
            font-size: 0.875rem;
            line-height: 1.25rem;
            margin-top: 1rem;
            margin-bottom: 3rem;
          }
    
          .nc-caption {
            color: #ffffff;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
    
          .nc-feed {
            display: grid;
            grid-template-columns: repeat(1, minmax(0, 1fr));
            gap: 1rem;
          }
    
          @media (min-width: 640px) {
            .nc-feed {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }
    
          @media (min-width: 1024px) {
            .nc-feed {
              grid-template-columns: repeat(3, minmax(0, 1fr));
            }
          }
    
          .nc-feed-item {
            width: 100%;
            height: 200px;
            background-color: transparent;
            margin-bottom: 0.5rem;
          }
          .nc-feed-item .nc-insta-image {
            width: 100%;
            height: 200px;
            object-fit: contain;
          }
          .nc-video {
            position: relative;
          }
          .nc-video-player-icon {
            position: absolute;
            top: 50%;
            left: 50%;
            height: 48px;
            width: 48px;
            transform: translate(-50%, -50%);
          }
          .nc-error {
            text-align: center;
            background-color: #fed7d7;
            padding: 1rem 0.5rem;
            border-radius: 0.25rem;
          }
        `;
    }
}
window.customElements.define('embed-instagram-feed', MyFeed);

export default (props) => {
    useEffect(() => {
        props.setExpandHeader(false)
    })

    return (
        <div className="ani_item">
            <Section>
                <h2 className="text_texture crystal">最新攝影作品 <a href="https://www.instagram.com/catrix.photography/">
                    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" style={
                        { verticalAlign: "middle", paddingLeft: "1rem" }
                    } />
                </a></h2>
                <br />

                <br />
                <embed-instagram-feed
                    url="https://v1.nocodeapi.com/ray1422/instagram/DAtZzQhwuxNYvaHy"
                ></embed-instagram-feed>

            </Section>
            {/* <Section>Hello</Section> */}
        </div>


    )
}