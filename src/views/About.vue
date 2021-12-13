<template>
  <div class="q-pa-md fixed-center full-width">
    <q-carousel
        animated
        v-model="slide"
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        height="60vh"
        class="shadow-2 rounded-borders"
    >
      <q-carousel-slide name="1" img-src="../assets/images/malefiz-1.png">
        <div class="absolute-right custom-caption">
          <div class="text-h2">Willkommen Zu Malefiz</div>
          <div class="text-subtitle1"><p>Würfeln, legen, taktiken – <br>das ist das „Das Original Malefiz Spiel“</p><br>
            <p>Bei diesem Legespiel kommt es auf euer Würfelglück und Taktikgeschick an – und was ihr daraus macht.<br>
              Es bleibt bis zum Schluss spannend, denn wer im einen Moment noch wie ein Gewinner aussah,<br>
              kann im nächsten Moment schon wieder ganz hinten stehen.</p></div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="2" img-src="../assets/images/malefiz-2.png">
        <div class="absolute-right custom-caption">
          <div class="text-h2">Kurzbeschreibung <br>„Das Original Malefiz Spiel“</div>
          <div class="text-subtitle1"><p>
            In dem Brettspiel für die ganze Familie geht es darum, dass jeder Spieler versucht,<br>
            am schnellsten ins Ziel zu gelangen.
            Auf dem Weg in das Ziel kann man den Gegner im wahrsten Sinne des Wortes Steine in den Weg legen,<br>
            um diese auf ihrem Weg auszubremsen.
          </p></div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="3" img-src="../assets/images/malefiz-3.png">
        <div class="absolute-right custom-caption">
          <div class="text-h2">Ziel des Spiels</div>
          <div class="text-subtitle1"><p>Als Erster eine der eigenen Figuren ins Ziel bringen. Gleichzeitig versucht
            ihr,
            es euren Mitspielern so schwer wie möglich zu machen.</p></div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="4" img-src="../assets/images/malefiz-4.png">
        <div class="absolute-right custom-caption">
          <div class="text-h2">Spieleranzahl, Alter und Dauer</div>
          <br>
          <div class="text-subtitle1">
            2 – 4 Spieler <br>
            ab 6 Jahren <br>
            rund 30 – 45 Minuten
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="5" img-src="../assets/images/malefiz-5.png">
        <div class="absolute-right custom-caption">
          <div class="text-h2">Spielertyp</div>
          <div class="text-subtitle1">
            Familienspiel <br>
            Taktiker <br>
            Brettspiel <br>
            Würfelspiel <br>
            Laufspiel <br>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="6" img-src="../assets/images/malefiz-6.png">
        <div class="absolute-right custom-caption">
          <div class="text-h2">Spiel startklar machen</div>
          <div class="text-subtitle1">
            Jeder von euch erhält 5 Spielfiguren einer Farbe, die ihr auf den farblich markierten Ausgangsfeldern
            absetzt. <br>
            Der Spielplan kommt in eure Mitte, sodass jeder einen guten Zugang hat.<br>
            Die Sperrsteine legt ihr auf die 11 roten Felder des Plans.
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="7" img-src="../assets/images/malefiz-7.png">
        <div class="absolute-right custom-caption">
          <div class="text-h2">Spiel startklar machen</div>
          <div class="text-subtitle1">
            Jeder von euch erhält 5 Spielfiguren einer Farbe, die ihr auf den farblich markierten Ausgangsfeldern absetzt. <br>
            Der Spielplan kommt in eure Mitte, sodass jeder einen guten Zugang hat.<br>
            Die Sperrsteine legt ihr auf die 11 roten Felder des Plans.
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="7" img-src="../assets/images/malefiz-7.png">
        <div class="absolute-right custom-caption">
          <div class="text-h2">Alles hat ein Ende</div>
          <div class="text-subtitle1">
            Um das Spiel zu gewinnen, muss man mit dem letzten Stein das Zielfeld ganz genau erreichen. <br>
            Sind es noch 3 Felder, dann muss man auch eine Drei würfeln, Passen oder eine andere Figur setzen.
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  setup() {
    return {
      slide: ref('1'),
      autoplay: ref(true)
    }
  }
}
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: right
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)

</style>
