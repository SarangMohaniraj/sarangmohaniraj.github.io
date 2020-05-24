//FontAwesome Icon Library
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import {
        faGithub,
        faInstagram,
        faLinkedinIn,
        faJava,
        faPython,
        faReact,
        faJsSquare,
        faBootstrap
        } from '@fortawesome/free-brands-svg-icons'


/* Custom svg
 * https://icomoon.io/app/#/select
 * Click Get Code
 * The first 2 values of the array should be the non-zero values of the svg viewbox
 * The 3rd value is an empty array
 * The 4th value is a custom unicode value, but it does not really matter so it can be left blank so nothing messes up
 * The 5th value is the most important. It is the svg path.

 * const faCustomIcon = {
    prefix: 'fab',
    iconName: 'custom-icon',
    icon: [x, x, [], '', 'svg path']
   }
 */

const faRedux = {
  prefix: 'fab',
  iconName: 'redux',
  icon: [32, 32, [], '', 'M22.177 22.005c1.159-0.1 2.057-1.12 1.999-2.339-0.061-1.219-1.060-2.197-2.277-2.197h-0.081c-1.257 0.041-2.237 1.099-2.197 2.359 0.040 0.639 0.301 1.159 0.659 1.537-1.397 2.717-3.495 4.715-6.672 6.393-2.137 1.117-4.395 1.539-6.592 1.239-1.837-0.259-3.275-1.080-4.155-2.397-1.317-1.999-1.437-4.155-0.34-6.312 0.801-1.559 1.999-2.697 2.799-3.257-0.2-0.519-0.44-1.397-0.56-2.056-5.915 4.236-5.313 10.028-3.516 12.765 1.339 1.997 4.076 3.275 7.072 3.275 0.799 0 1.639-0.059 2.457-0.259 5.195-0.999 9.129-4.115 11.387-8.709zM29.308 17.011c-3.095-3.636-7.651-5.633-12.845-5.633h-0.68c-0.337-0.739-1.116-1.199-1.996-1.199h-0.060c-1.257 0-2.237 1.080-2.196 2.337 0.040 1.197 1.059 2.197 2.277 2.197h0.099c0.9-0.040 1.679-0.6 1.997-1.399h0.74c3.079 0 5.993 0.899 8.651 2.656 2.036 1.339 3.496 3.096 4.315 5.195 0.717 1.717 0.679 3.396-0.060 4.796-1.139 2.196-3.057 3.356-5.593 3.356-1.599 0-3.156-0.5-3.956-0.859-0.479 0.397-1.279 1.057-1.859 1.457 1.757 0.797 3.536 1.257 5.253 1.257 3.896 0 6.791-2.196 7.891-4.315 1.197-2.397 1.099-6.432-1.959-9.888zM8.653 22.723c0.039 1.199 1.057 2.197 2.277 2.197h0.080c1.279-0.040 2.257-1.097 2.197-.357 0-1.199-1.039-2.196-2.257-2.196h-0.081c-0.080 0-0.199 0-0.3 0.039-1.657-2.797-2.357-5.795-2.096-9.028 0.159-2.437 0.959-4.556 2.396-6.313 1.199-1.499 3.456-2.239 4.995-2.277 4.315-0.081 6.113 5.295 6.252 7.432l1.997 0.599c-0.46-6.552-4.533-9.989-8.429-9.989-3.656 0-7.031 2.657-8.391 6.553-1.857 5.195-0.639 10.188 1.639 14.184-0.199 0.26-0.319 0.719-0.279 1.157z']
}


const faFirebase = {
  prefix: 'fab',
  iconName: 'firebase',
  icon: [48, 48, [], '', 'M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z']
}

const faGoogleColab = {
  prefix: 'fab',
  iconName: 'google-colab',
  icon: [24, 24, [], '', 'M4.54,9.46,2.19,7.1a6.93,6.93,0,0,0,0,9.79l2.36-2.36A3.59,3.59,0,0,1,4.54,9.46Z M2.19,7.1,4.54,9.46a3.59,3.59,0,0,1,5.08,0l1.71-2.93h0l-.1-.08h0A6.93,6.93,0,0,0,2.19,7.1Z M11.34,17.46h0L9.62,14.54a3.59,3.59,0,0,1-5.08,0L2.19,16.9a6.93,6.93,0,0,0,9,.65l.11-.09 M12,7.1a6.93,6.93,0,0,0,0,9.79l2.36-2.36a3.59,3.59,0,1,1,5.08-5.08L21.81,7.1A6.93,6.93,0,0,0,12,7.1Z M21.81,7.1,19.46,9.46a3.59,3.59,0,0,1-5.08,5.08L12,16.9A6.93,6.93,0,0,0,21.81,7.1Z']
}

const faCSharp = {
  prefix: 'fab',
  iconName: 'c-sharp',
  icon: [50, 50, [], '', 'M 25 2 C 24.285156 2 23.570313 2.179688 22.933594 2.539063 L 6.089844 12.003906 C 4.800781 12.726563 4 14.082031 4 15.535156 L 4 34.464844 C 4 35.917969 4.800781 37.273438 6.089844 37.996094 L 22.933594 47.460938 C 23.570313 47.820313 24.285156 48 25 48 C 25.714844 48 26.429688 47.820313 27.066406 47.460938 L 43.910156 38 C 45.199219 37.273438 46 35.917969 46 34.464844 L 46 15.535156 C 46 14.082031 45.199219 12.726563 43.910156 12.003906 L 27.066406 2.539063 C 26.429688 2.179688 25.714844 2 25 2 Z M 25 13 C 28.78125 13 32.277344 14.753906 34.542969 17.738281 L 30.160156 20.277344 C 28.84375 18.835938 26.972656 18 25 18 C 21.140625 18 18 21.140625 18 25 C 18 28.859375 21.140625 32 25 32 C 26.972656 32 28.84375 31.164063 30.160156 29.722656 L 34.542969 32.261719 C 32.277344 35.246094 28.78125 37 25 37 C 18.382813 37 13 31.617188 13 25 C 13 18.382813 18.382813 13 25 13 Z M 35 20 L 37 20 L 37 22 L 39 22 L 39 20 L 41 20 L 41 22 L 43 22 L 43 24 L 41 24 L 41 26 L 43 26 L 43 28 L 41 28 L 41 30 L 39 30 L 39 28 L 37 28 L 37 30 L 35 30 L 35 28 L 33 28 L 33 26 L 35 26 L 35 24 L 33 24 L 33 22 L 35 22 Z M 37 24 L 37 26 L 39 26 L 39 24 Z']
}


library.add(
  faExternalLinkAlt,

  faGithub,
  faInstagram,
  faLinkedinIn,
  faJava,
  faPython,
  faReact,
  faJsSquare,
  faRedux,
  faBootstrap,
  faFirebase,
  faGoogleColab,
  faCSharp
);


