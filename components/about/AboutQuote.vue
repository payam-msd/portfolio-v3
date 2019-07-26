<template>
  <div>
    <section id="quote" class="quote">
      <div class="quote__holder">
        <div class="quote__content">
          <div class="u-text-center">
            <svg
              viewBox="0 0 67.7 53.6"
              xmlns="http://www.w3.org/2000/svg"
              xml:space="preserve"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="quote-mark"
              version="1.1"
            >
              <path
                d="M19.2,1.2l9.8,8c-5.7,3-12.3,10.5-13.9,16.9c0.7-0.4,2.1-0.5,3.6-0.5c6.8,0,12.1,5.2,12.1,12.8
								c0,7.6-6.4,14.1-14.1,14.1c-8.4,0-15.8-6.6-15.8-18.1C0.9,20.9,8.2,9,19.2,1.2z M55.5,1.2l9.8,8c-5.7,3-12.5,10.5-13.9,16.9
								c0.5-0.4,2.1-0.5,3.6-0.5c6.8,0,11.9,5.2,11.9,12.8c0,7.6-6.2,14.1-13.9,14.1c-8.4,0-15.8-6.6-15.8-18.1C37.2,20.9,44.5,9,55.5,1.2
								z"
                class="st0"
              />
            </svg>
            <blockquote>
              <p>{{ quoteData.content }}</p>
            </blockquote>
            <div class="person">
              <strong>{{quoteData.person}}</strong>
              <span>{{quoteData.experties}}</span>
            </div>
            <div class="btn btn-change">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                style="enable-background:new 0 0 24 24"
                version="1.1"
                class="btn-svg"
              >
                <path
                  d="M3.749,15.249c-0.213,0-0.417-0.092-0.56-0.253l-2.971-2.97c-0.142-0.141-0.22-0.33-0.22-0.53s0.078-0.389,0.22-0.53
                                c0.141-0.142,0.33-0.22,0.53-0.22s0.389,0.078,0.53,0.22l1.72,1.72v-0.439c0.002-2.693,1.194-5.221,3.27-6.935
                                c1.633-1.348,3.609-2.06,5.716-2.06c0.288,0,0.581,0.014,0.87,0.041c2.394,0.229,4.554,1.375,6.085,3.229
                                c0.127,0.154,0.187,0.349,0.168,0.549s-0.115,0.38-0.269,0.507c-0.134,0.111-0.303,0.172-0.477,0.172
                                c-0.225,0-0.436-0.099-0.579-0.273c-1.275-1.545-3.076-2.5-5.07-2.691c-0.242-0.023-0.488-0.035-0.729-0.035
                                c-1.753,0-3.398,0.594-4.759,1.717c-1.731,1.429-2.724,3.535-2.725,5.779v0.439l1.72-1.72c0.142-0.142,0.33-0.22,0.53-0.22
                                s0.389,0.078,0.53,0.22c0.142,0.141,0.22,0.33,0.22,0.53s-0.078,0.389-0.22,0.53l-2.986,2.986
                                C4.166,15.157,3.962,15.249,3.749,15.249z"
                />
                <path
                  d="M12.006,21.245c-0.089,0-0.177-0.001-0.267-0.004c-2.403-0.07-4.635-1.071-6.285-2.819
                                c-0.138-0.146-0.21-0.336-0.204-0.536c0.006-0.2,0.089-0.386,0.235-0.524c0.14-0.132,0.323-0.204,0.515-0.204
                                c0.206,0,0.405,0.086,0.546,0.235c1.375,1.457,3.235,2.291,5.237,2.349c0.071,0.002,0.143,0.003,0.214,0.003
                                c1.924,0,3.753-0.727,5.15-2.045c1.417-1.337,2.261-3.194,2.345-5.136l-1.713,1.713c-0.142,0.142-0.33,0.22-0.53,0.22
                                s-0.389-0.078-0.53-0.22c-0.292-0.292-0.292-0.768,0-1.061l3-3c0.07-0.07,0.153-0.125,0.245-0.163
                                c0.007-0.003,0.016-0.006,0.024-0.009c0.081-0.031,0.171-0.048,0.261-0.048c0.089,0,0.176,0.016,0.261,0.048
                                c0.011,0.004,0.022,0.008,0.032,0.012c0.085,0.035,0.167,0.09,0.238,0.16l3,3c0.292,0.292,0.292,0.768,0,1.061
                                c-0.142,0.142-0.33,0.22-0.53,0.22s-0.389-0.078-0.53-0.22l-1.725-1.725c-0.082,2.357-1.098,4.616-2.818,6.239
                                C16.499,20.373,14.308,21.245,12.006,21.245z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="quote__content--bg" :style="{backgroundImage: `url(${quoteData.img})`}"></div>
      </div>
    </section>
  </div>
</template>

<script>
import quotebg from "~/assets/img/quotebg.webp";
export default {
  name: "AboutQoute",
  data() {
    return {
      quoteData: {
        content:
          "It’s great to work with payam! He’s quick to understand theconditions and shares improvements from a UX point of view. Witha wide knowledge of front-end development and web design, heconnects customer, design and developers. A generalist andspecialist combineds!",
        person: "Remmelt van Tol",
        experties: "Digital strategist at Salveo Pharma",
        img: quotebg
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/components/about/_quote.scss";
.btn {
  margin-top: 5rem;
  display: inline-block;
  height: 3.5rem;
  padding: 0.85rem 1.85rem;
  font-family: proxima-bold, sans-serif;
  text-decoration: none;
  border-radius: 5rem;
  background: hsl(0, 0%, 97%);
  cursor: pointer;
  transition: background 0.25s ease-in-out, color 0.25s ease-in-out;
}
</style>
