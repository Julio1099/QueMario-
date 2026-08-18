import {format} from 'date-fns'
import image from '../../utils/image.base64'
import ua from 'universal-analytics'

export default async (req, res) => {
    ua('UA-76312016-3').pageview("/api").send()

    res.statusCode = 200
    res.setHeader('Content-Type', 'image/svg+xml')
    res.setHeader('Cache-Control', 'no-store, max-age=0')
    res.end(/* html */`
        <svg version="1.1"
            baseProfile="full"
            width="100%" height="231"
            max-width="854"
            viewBox="0 0 854 231"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

            <defs>
                <rect id="rect" x="0" y="0" width="100%" height="99%" rx="6"/>
                <clipPath id="clip">
                    <use xlink:href="#rect"/>
                </clipPath>
                <style type="text/css"><![CDATA[
                    .text { font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif,Apple Color Emoji,Segoe UI Emoji; }
                ]]></style>
                <clipPath id="en_hello_clip" clipPathUnits="userSpaceOnUse">
                    <rect x="339" y="80" width="0" height="40">
                        <animate attributeName="width" dur="18s" repeatCount="indefinite" values="0;176;176;0;0" keyTimes="0;0.05;0.46;0.50;1" />
                    </rect>
                </clipPath>
                <clipPath id="en_name_clip" clipPathUnits="userSpaceOnUse">
                    <rect x="316" y="121" width="0" height="24">
                        <animate attributeName="width" dur="18s" repeatCount="indefinite" values="0;0;222;222;0;0" keyTimes="0;0.05;0.10;0.41;0.46;1" />
                    </rect>
                </clipPath>
                <clipPath id="en_work_clip" clipPathUnits="userSpaceOnUse">
                    <rect x="313" y="143" width="0" height="24">
                        <animate attributeName="width" dur="18s" repeatCount="indefinite" values="0;0;224;224;0;0" keyTimes="0;0.10;0.15;0.36;0.41;1" />
                    </rect>
                </clipPath>
                <clipPath id="pt_hello_clip" clipPathUnits="userSpaceOnUse">
                    <rect x="388" y="80" width="0" height="40">
                        <animate attributeName="width" dur="18s" repeatCount="indefinite" values="0;0;110;110;0" keyTimes="0;0.50;0.55;0.96;1" />
                    </rect>
                </clipPath>
                <clipPath id="pt_name_clip" clipPathUnits="userSpaceOnUse">
                    <rect x="310" y="121" width="0" height="24">
                        <animate attributeName="width" dur="18s" repeatCount="indefinite" values="0;0;236;236;0;0" keyTimes="0;0.55;0.60;0.91;0.96;1" />
                    </rect>
                </clipPath>
                <clipPath id="pt_work_clip" clipPathUnits="userSpaceOnUse">
                    <rect x="283" y="143" width="0" height="24">
                        <animate attributeName="width" dur="18s" repeatCount="indefinite" values="0;0;290;290;0;0" keyTimes="0;0.60;0.65;0.86;0.91;1" />
                    </rect>
                </clipPath>
            </defs>

            <use xlink:href="#rect" stroke-width="2" fill="#fff" stroke="#e1e4e8"/>
            <rect width="100%" height="100%" style="fill:rgb(100,0,255)" clip-path="url(#clip)"/>

            <image
                id="image"
                x="0" y="0"
                height="100%"
                clip-path="url(#clip)"
                xlink:href="data:image/gif;base64,${image}"
                style="opacity: 1 !important"
            />

            <!-- <rect x="0" y="135" width="380" height="100" fill="black"/> -->
            <!-- <rect x="16" y="185" width="380" height="23" fill="black"/> -->
            <!-- <rect x="115" y="185" width="180" height="23" fill="white"/> -->

            <text class="text" x="50%" y="110" text-anchor="middle" font-size="32px" font-weight="bold" fill="#fff" clip-path="url(#en_hello_clip)">Hi there 👋</text>
            <text class="text" x="50%" y="138" text-anchor="middle" font-size="18px" fill="#fff" clip-path="url(#en_name_clip)">
                My name is <tspan font-weight="bold" fill="black">Júlio Cesar</tspan>
            </text>
            <text class="text" x="50%" y="160" text-anchor="middle" font-size="18px" fill="#fff" clip-path="url(#en_work_clip)">
                I do software engineering.
            </text>

            <text class="text" x="388" y="110" font-size="32px" font-weight="bold" fill="#fff" clip-path="url(#pt_hello_clip)">Oi 😎</text>
            <text class="text" x="310" y="138" font-size="18px" fill="#fff" clip-path="url(#pt_name_clip)">
                Meu nome é <tspan font-weight="bold" fill="black">Júlio Cesar</tspan>
            </text>
            <text class="text" x="283" y="160" font-size="18px" fill="#fff" clip-path="url(#pt_work_clip)">
                Eu faço engenharia de software.
            </text>

            <text class="text" x="20" y="32" font-size="12px" fill="#fff">${format(new Date(), "iii, MMM. do, yyy")}</text>

            <animate xlink:href="#image" attributeName="x" from="0" to="-2600" dur="80s" repeatCount="1" fill="freeze" />
        </svg>
    `)
}
