<template>
  <mdb-container class="mt-5">
    <mdb-card>
      <mdb-card-title class="titre-sections">Contactez-nous</mdb-card-title>
      <mdb-card-body>
        <mdb-card-text
          class="pr-5 pl-5"
          mr-4
          ml-4
        >Vous avez des questions ? N'hésitez pas à nous contacter directement. Notre équipe vous répondra sous quelques heures pour vous aider.</mdb-card-text>
        <form class="needs-validation" novalidate @submit.prevent="submitForm">
          <mdb-row>
            <mdb-col md="8">
              <mdb-row>
                <mdb-col>
                  <mdb-input label="Votre nom" v-model="fields.name" required />
                </mdb-col>
                <mdb-col>
                  <mdb-input type="email" label="Votre email" v-model="fields.email" required />
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col>
                  <mdb-input label="Le sujet" v-model="fields.subject" required />
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col>
                  <mdb-input
                    type="textarea"
                    label="Votre message"
                    v-model="fields.message"
                    required
                  />
                </mdb-col>
              </mdb-row>
            </mdb-col>
            <mdb-col md="4">
              <mdb-row>
                <mdb-col class="mt-4">
                  <mdb-icon icon="map-marker-alt" size="2x" />
                  <p>Venelle des merisiers, 46, 1301 Wavre, Belgique</p>
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col class="mt-4">
                  <mdb-icon icon="phone" size="2x" />
                  <p>+32 472/010 987</p>
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col class="mt-4">
                  <mdb-icon icon="envelope" size="2x" />
                  <p>m.gassmann@students.ephec.be</p>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
          <mdb-btn color="primary" type="submit" class="float-left">Envoyer</mdb-btn>
        </form>
      </mdb-card-body>
    </mdb-card>
  </mdb-container>
</template>


<script>
import {
  mdbContainer,
  mdbInput,
  mdbCard,
  mdbCardTitle,
  mdbCardText,
  mdbCardBody,
  mdbIcon,
  mdbBtn,
  mdbRow,
  mdbCol,
} from "mdbvue";

export default {
  name: "Contact",
  components: {
    mdbContainer,
    mdbInput,
    mdbCard,
    mdbCardTitle,
    mdbCardBody,
    mdbCardText,
    mdbIcon,
    mdbBtn,
    mdbRow,
    mdbCol,
  },
  data() {
    return {
      fields: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm(event) {
      event.target.classList.add("was-validated");
      // submit form
    },
  },
};
</script>

<style scoped>
.container {
  text-align: center;
}
.titre-sections {
  margin-top: 30px;
  background: url(http://ecard.enter-media.org/upload/iblock/cf4/cf401a38b3c0190e91e68729a24795b6.jpg)
    repeat;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-position: 50% 50%;
  position: relative;
  line-height: normal;
  font-size: 3rem;
  background-color: #fff;
}
</style>