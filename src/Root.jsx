import { Composition, Still, Folder } from "remotion";
import { ABTestHero } from "./ABTestHero";
import { FunnelImage } from "./FunnelImage";
import { SplitScreen } from "./SplitScreen";
import { GoogleSynlighet } from "./GoogleSynlighet";
import { GoogleSynlighet2 } from "./GoogleSynlighet2";
import { GoogleSynlighetLight } from "./GoogleSynlighetLight";
import { GoogleSynlighetGray } from "./GoogleSynlighetGray";
import { GoogleSynlighetGray2 } from "./GoogleSynlighetGray2";
import { Slide2PortenGray, Slide2PortenGray2 } from "./Slide2Porten";
import { Slide3SjekkGray, Slide3SjekkGray2 } from "./Slide3Sjekk";
import { Slide5StemmeGray, Slide5StemmeGray2 } from "./Slide5Stemme";
import { Slide4AdferdGray, Slide4AdferdGray2 } from "./Slide4Adferd";
import { Slide6FinjusteringGray, Slide6FinjusteringGray2 } from "./Slide6Finjustering";
import { Slide7UtdatertGray, Slide7UtdatertGray2 } from "./Slide7Utdatert";
import { Slide8OppsummeringGray, Slide8OppsummeringGray2 } from "./Slide8Oppsummering";
import { Speed1Hook } from "./Speed1Hook";
import { Speed2Stakes } from "./Speed2Stakes";
import { Speed3Bilder } from "./Speed3Bilder";
import { Speed4Bakgrunn } from "./Speed4Bakgrunn";
import { Speed5Webhotell } from "./Speed5Webhotell";
import { Speed6Nyhet } from "./Speed6Nyhet";
import { GratisUtkast } from "./GratisUtkast";
import { Mobil1Hook } from "./Mobil1Hook";
import { Mobil2Virkelighet } from "./Mobil2Virkelighet";
import { Mobil3Tregere } from "./Mobil3Tregere";
import { Mobil4Google } from "./Mobil4Google";
import { Mobil5Konsekvens } from "./Mobil5Konsekvens";
import { Mobil6Problem } from "./Mobil6Problem";
import { Mobil7Losning } from "./Mobil7Losning";
import { Mobil8CTA } from "./Mobil8CTA";
import { BesteDesign } from "./BesteDesign";
import { FavorittDesign } from "./FavorittDesign";
import { SaasCreatives } from "./SaasCreatives";
import { BoldAccentTemplate } from "./BoldAccentTemplate";
import { InspirasjonFavoritt } from "./InspirasjonFavoritt";
import { InspirasjonFavorittMG } from "./InspirasjonFavorittMG";
import { GoLiveAnimation } from "./GoLiveAnimation";
import { WebShowcase } from "./WebShowcase";
import { MgBrandPalett } from "./MgBrandPalett";
import { NyesteNettsider } from "./NyesteNettsider";
import { NettsiderSlideIn } from "./NettsiderSlideIn";
import { NettsiderScalePop } from "./NettsiderScalePop";
import { NettsiderFadeBlur } from "./NettsiderFadeBlur";
import { NettsiderFadeBlurClean } from "./NettsiderFadeBlurClean";
import { SortLyseblaPalett } from "./SortLyseblaPalett";
import { SortKremGronnPalett } from "./SortKremGronnPalett";

// --- GA ILLUSTRASJON ---
import { GAIllustrasjon } from "./GAIllustrasjon";
import { ChatIllustrasjon } from "./BILDER/ChatIllustrasjon";

// --- PAGESPEED GAUGE ---
import { PageSpeedGauge } from "./PageSpeedGauge";
import { PageSpeedGauge2 } from "./PageSpeedGauge2";
import { PageSpeedDonut } from "./PageSpeedDonut";
import { SaasDashboard } from "./SaasDashboard";

// --- TRIPLETEX DASHBOARD ---
import { TripletexDashboard } from "./TripletexDashboard";

// --- TRIPLETEX ILLUSTRASJONER ---
import { TripletexHeroDashboard } from "./TripletexHeroDashboard";
import { TripletexSupportChat } from "./TripletexSupportChat";
import { TripletexStartAS } from "./TripletexStartAS";
import { TripletexStatsCounter } from "./TripletexStatsCounter";
import { TripletexFeatureIcons } from "./TripletexFeatureIcons";

// --- BILDER (template-bibliotek frames) ---
import {
  Frame0Apps, Frame1Creative, Frame2Spa, Frame3Support,
  Frame4Codev, Frame5Crypto, Frame6Investment, Frame7Landing,
  Frame8Skjermbilde, Frame9Erasebg, Frame10Kvarnstrands, Frame11Startup,
  Frame12SbsAppsLanding, Frame13SbsAppsSupport,
  Frame14SbsCryptoInvest, Frame15SbsCodevStartup,
  Frame16Stacked,
  FrameElvemark,
  FrameLaerdomShowcase,
  FrameInspirasjonsbilde,
  GAStackedChart,
} from "./BILDER";

import { MediegrpuppenLogo } from "./MediegrpuppenLogo";

// --- Template-system ---
import { ContentRenderer } from "./ContentRenderer";
import { IphoneSolbord } from "./IphoneSolbord";
import { IphoneVillmark } from "./IphoneVillmark";
import { IphoneVillmarkDouble } from "./IphoneVillmarkDouble";
import { IphoneTannlege } from "./IphoneTannlege";
import { IphonePels } from "./IphonePels";
import { allContent, instagram1Content, ferdigeContent } from "../content";
import { formats } from "./config/formats";
import { videoPresets } from "./config/presets";
import { defaults } from "./config/defaults";

export const RemotionRoot = () => {
  return (
    <>
      {/* --- FERDIGE INNLEGG --- */}
      <Folder name="FERDIGE-INNLEGG">
        <Still
          id="I19-IphoneSolbord"
          component={IphoneSolbord}
          width={1080}
          height={1080}
        />
        <Still
          id="I20-IphoneVillmark"
          component={IphoneVillmark}
          width={1080}
          height={1080}
        />
        <Still
          id="I21-IphoneVillmarkDouble"
          component={IphoneVillmarkDouble}
          width={1080}
          height={1350}
        />
        <Still
          id="I22-IphoneTannlege"
          component={IphoneTannlege}
          width={1080}
          height={1080}
        />
        <Still
          id="I23-IphonePels"
          component={IphonePels}
          width={1080}
          height={1080}
        />
        <Folder name="OppdaterNettsiden">
          <Composition
            id="OppdaterNettsiden"
            component={NyesteNettsider}
            durationInFrames={240}
            fps={30}
            width={2160}
            height={2160}
          />
        </Folder>
        <Folder name="NettsiderSomSelger">
          <Composition
            id="NettsiderSomSelger"
            component={NettsiderSlideIn}
            durationInFrames={240}
            fps={30}
            width={2160}
            height={2160}
          />
        </Folder>
        <Folder name="DinNesteNettside">
          <Composition
            id="DinNesteNettside"
            component={NettsiderScalePop}
            durationInFrames={240}
            fps={30}
            width={2160}
            height={2160}
          />
        </Folder>
        <Folder name="FraIdeTilNettside">
          <Composition
            id="FraIdeTilNettside"
            component={NettsiderFadeBlur}
            durationInFrames={240}
            fps={30}
            width={2160}
            height={2160}
          />
          <Still
            id="FraIdeTilNettsideClean"
            component={NettsiderFadeBlurClean}
            width={2160}
            height={2160}
          />
        </Folder>
        {ferdigeContent.map((content) => {
          const fmt = formats[content.format || defaults.format];
          const preset = videoPresets[content.videoPreset || defaults.videoPreset];
          return (
            <Folder key={`ferdig-${content.id}`} name={content.id}>
              {content.slides.map((slide, index) => {
                const baseId = slide.compositionId || `${content.id}S${index + 1}`;
                const compositionId = `Ferdig-${baseId}`;
                const props = { content, slideIndex: index };
                if (slide.type === "video") {
                  return (
                    <Composition
                      key={compositionId}
                      id={compositionId}
                      component={ContentRenderer}
                      durationInFrames={preset.durationInFrames}
                      fps={preset.fps}
                      width={fmt.width}
                      height={fmt.height}
                      defaultProps={props}
                    />
                  );
                }
                return (
                  <Still
                    key={compositionId}
                    id={compositionId}
                    component={ContentRenderer}
                    width={fmt.width}
                    height={fmt.height}
                    defaultProps={props}
                  />
                );
              })}
            </Folder>
          );
        })}
      </Folder>

      {/* --- INNLEGG-INSTAGRAM-1 --- */}
      <Folder name="INNLEGG-INSTAGRAM-1">
        {instagram1Content.map((content) => {
          const fmt = formats[content.format || defaults.format];
          const preset = videoPresets[content.videoPreset || defaults.videoPreset];
          return (
            <Folder key={content.id} name={content.id}>
              {content.slides.map((slide, index) => {
                const compositionId = slide.compositionId || `${content.id}S${index + 1}`;
                const props = { content, slideIndex: index };
                if (slide.type === "video") {
                  return (
                    <Composition
                      key={compositionId}
                      id={compositionId}
                      component={ContentRenderer}
                      durationInFrames={preset.durationInFrames}
                      fps={preset.fps}
                      width={fmt.width}
                      height={fmt.height}
                      defaultProps={props}
                    />
                  );
                }
                return (
                  <Still
                    key={compositionId}
                    id={compositionId}
                    component={ContentRenderer}
                    width={fmt.width}
                    height={fmt.height}
                    defaultProps={props}
                  />
                );
              })}
            </Folder>
          );
        })}
      </Folder>

      {/* --- BILDER (template-bibliotek frames) --- */}
      <Folder name="BILDER">
        <Still id="GA-Illustrasjon" component={GAIllustrasjon} width={1100} height={520} />
        <Still id="Chat-Illustrasjon" component={ChatIllustrasjon} width={1080} height={1080} />
        <Still id="GA-Stacked-Chart" component={GAStackedChart} width={760} height={480} />
        <Still id="PageSpeed-Gauge" component={PageSpeedGauge} width={960} height={760} />
        <Still id="PageSpeed-Gauge-2" component={PageSpeedGauge2} width={1040} height={760} />
        <Still id="PageSpeed-Donut" component={PageSpeedDonut} width={800} height={1160} />
        <Still id="SaaS-Dashboard" component={SaasDashboard} width={1360} height={960} />
        <Folder name="Standard">
          <Still id="Bilde-Apps" component={Frame0Apps} width={3200} height={2000} />
          <Still id="Bilde-Support" component={Frame3Support} width={3200} height={2000} />
          <Still id="Bilde-Codev" component={Frame4Codev} width={3200} height={2000} />
          <Still id="Bilde-Crypto" component={Frame5Crypto} width={3200} height={2000} />
          <Still id="Bilde-Investment" component={Frame6Investment} width={3200} height={2000} />
          <Still id="Bilde-Landing" component={Frame7Landing} width={3200} height={2000} />
          <Still id="Bilde-Erasebg" component={Frame9Erasebg} width={3200} height={2000} />
          <Still id="Bilde-Kvarnstrands" component={Frame10Kvarnstrands} width={3200} height={2000} />
          <Still id="Bilde-Startup" component={Frame11Startup} width={3200} height={2000} />
        </Folder>
        <Folder name="Hero">
          <Still id="Bilde-Creative" component={Frame1Creative} width={3200} height={2000} />
          <Still id="Bilde-Spa" component={Frame2Spa} width={3200} height={2000} />
          <Still id="Bilde-Skjermbilde" component={Frame8Skjermbilde} width={3200} height={2000} />
          <Still id="Bilde-Elvemark" component={FrameElvemark} width={3200} height={2000} />
          <Still id="Bilde-Inspirasjonsbilde" component={FrameInspirasjonsbilde} width={3200} height={2000} />
        </Folder>
        <Folder name="Side-by-Side">
          <Still id="Bilde-SBS-AppsLanding" component={Frame12SbsAppsLanding} width={3200} height={2000} />
          <Still id="Bilde-SBS-AppsSupport" component={Frame13SbsAppsSupport} width={3200} height={2000} />
          <Still id="Bilde-SBS-CryptoInvest" component={Frame14SbsCryptoInvest} width={3200} height={2000} />
          <Still id="Bilde-SBS-CodevStartup" component={Frame15SbsCodevStartup} width={3200} height={2000} />
        </Folder>
        <Folder name="Stacked">
          <Still id="Bilde-Stacked" component={Frame16Stacked} width={3200} height={2000} />
        </Folder>
        <Folder name="Showcase">
          <Still id="Bilde-LaerdomShowcase" component={FrameLaerdomShowcase} width={3200} height={2000} />
        </Folder>
      </Folder>

      {/* --- Alt annet --- */}
      <Folder name="Eldre-Innlegg">

      {/* Logo */}
      <Folder name="Logo">
        <Still
          id="MediegrpuppenLogo"
          component={MediegrpuppenLogo}
          width={2160}
          height={2160}
        />
      </Folder>

      {/* Fargepaletter */}
      <Folder name="Fargepaletter">
        <Still
          id="MgBrandPalett"
          component={MgBrandPalett}
          width={1600}
          height={1000}
        />
        <Still
          id="SortLyseblaPalett"
          component={SortLyseblaPalett}
          width={1600}
          height={1000}
        />
        <Still
          id="SortKremGronnPalett"
          component={SortKremGronnPalett}
          width={1600}
          height={1000}
        />
      </Folder>

      {/* --- Potensielle templates --- */}
      <Folder name="Potensielle-Templates">
        <Still
          id="BesteDesign"
          component={BesteDesign}
          width={2160}
          height={2160}
        />
        <Still
          id="FavorittDesign"
          component={FavorittDesign}
          width={2160}
          height={2160}
        />
        <Still
          id="SaasCreatives"
          component={SaasCreatives}
          width={2160}
          height={2160}
        />
        <Composition
          id="BoldAccentTemplate"
          component={BoldAccentTemplate}
          durationInFrames={240}
          fps={60}
          width={2160}
          height={2160}
        />
        <Composition
          id="InspirasjonFavoritt"
          component={InspirasjonFavoritt}
          durationInFrames={240}
          fps={60}
          width={2160}
          height={2700}
        />
        <Composition
          id="InspirasjonFavorittMG"
          component={InspirasjonFavorittMG}
          durationInFrames={240}
          fps={60}
          width={2160}
          height={2700}
        />
      </Folder>

      {/* --- Go Live Animation (for nettsiden) --- */}
      <Folder name="Nettside-Animasjoner">
        <Composition
          id="GoLiveAnimation"
          component={GoLiveAnimation}
          durationInFrames={120}
          fps={30}
          width={800}
          height={450}
        />
        <Composition
          id="WebShowcase"
          component={WebShowcase}
          durationInFrames={450}
          fps={30}
          width={1920}
          height={1080}
        />
      </Folder>

      {/* --- Gratis utkast CTA --- */}
      <Folder name="Gratis-Utkast">
        <Composition
          id="GratisUtkast"
          component={GratisUtkast}
          durationInFrames={240}
          fps={60}
          width={2160}
          height={2160}
        />
      </Folder>

      {/* --- Mobil vs Desktop karusell --- */}
      <Folder name="Mobil-Hastighet">
        <Composition
          id="Mobil1Hook"
          component={Mobil1Hook}
          durationInFrames={240}
          fps={60}
          width={2160}
          height={2160}
        />
        <Still
          id="Mobil2Virkelighet"
          component={Mobil2Virkelighet}
          width={2160}
          height={2160}
        />
        <Still
          id="Mobil3Tregere"
          component={Mobil3Tregere}
          width={2160}
          height={2160}
        />
        <Still
          id="Mobil4Google"
          component={Mobil4Google}
          width={2160}
          height={2160}
        />
        <Still
          id="Mobil5Konsekvens"
          component={Mobil5Konsekvens}
          width={2160}
          height={2160}
        />
        <Still
          id="Mobil6Problem"
          component={Mobil6Problem}
          width={2160}
          height={2160}
        />
        <Still
          id="Mobil7Losning"
          component={Mobil7Losning}
          width={2160}
          height={2160}
        />
        <Still
          id="Mobil8CTA"
          component={Mobil8CTA}
          width={2160}
          height={2160}
        />
      </Folder>

      {/* --- Nettside-hastighet karusell --- */}
      <Folder name="Hastighet">
        <Composition
          id="Speed1Hook"
          component={Speed1Hook}
          durationInFrames={240}
          fps={60}
          width={2160}
          height={2160}
        />
        <Still
          id="Speed2Stakes"
          component={Speed2Stakes}
          width={2160}
          height={2160}
        />
        <Still
          id="Speed3Bilder"
          component={Speed3Bilder}
          width={2160}
          height={2160}
        />
        <Still
          id="Speed4Bakgrunn"
          component={Speed4Bakgrunn}
          width={2160}
          height={2160}
        />
        <Still
          id="Speed5Webhotell"
          component={Speed5Webhotell}
          width={2160}
          height={2160}
        />
        <Still
          id="Speed6Nyhet"
          component={Speed6Nyhet}
          width={2160}
          height={2160}
        />
      </Folder>

      {/* --- Eldre varianter --- */}
      <Folder name="Arkiv">
        <Composition
          id="GoogleSynlighet"
          component={GoogleSynlighet}
          durationInFrames={120}
          fps={30}
          width={1080}
          height={1080}
        />
        <Composition
          id="GoogleSynlighet2"
          component={GoogleSynlighet2}
          durationInFrames={120}
          fps={30}
          width={1080}
          height={1080}
        />
        <Composition
          id="GoogleSynlighetLight"
          component={GoogleSynlighetLight}
          durationInFrames={120}
          fps={30}
          width={1080}
          height={1080}
        />
        <Composition
          id="ABTestHero"
          component={ABTestHero}
          durationInFrames={300}
          fps={30}
          width={1200}
          height={675}
        />
        <Still
          id="FunnelImage"
          component={FunnelImage}
          width={1800}
          height={600}
        />
        <Still
          id="SplitScreen"
          component={SplitScreen}
          width={1800}
          height={600}
        />
      </Folder>

      {/* --- Gray (coral gradient) --- */}
      <Folder name="Gray-Coral">
        <Composition
          id="GoogleSynlighetGray"
          component={GoogleSynlighetGray}
          durationInFrames={240}
          fps={60}
          width={1080}
          height={1080}
        />
        <Still
          id="Slide2PortenGray"
          component={Slide2PortenGray}
          width={2160}
          height={2160}
        />
        <Still
          id="Slide3SjekkGray"
          component={Slide3SjekkGray}
          width={2160}
          height={2160}
        />
        <Still
          id="Slide4AdferdGray"
          component={Slide4AdferdGray}
          width={2160}
          height={2160}
        />
        <Still
          id="Slide5StemmeGray"
          component={Slide5StemmeGray}
          width={2160}
          height={2160}
        />
        <Still
          id="Slide6FinjusteringGray"
          component={Slide6FinjusteringGray}
          width={2160}
          height={2160}
        />
        <Still
          id="Slide7UtdatertGray"
          component={Slide7UtdatertGray}
          width={2160}
          height={2160}
        />
        <Still
          id="Slide8OppsummeringGray"
          component={Slide8OppsummeringGray}
          width={2160}
          height={2160}
        />
      </Folder>

      {/* Template-baserte innlegg (fra content/*.json) */}
      {allContent.map((content) => {
        const fmt = formats[content.format || defaults.format];
        const preset = videoPresets[content.videoPreset || defaults.videoPreset];
        return (
          <Folder key={content.id} name={content.id}>
            {content.slides.map((slide, index) => {
              const compositionId = slide.compositionId || `${content.id}S${index + 1}`;
              const props = { content, slideIndex: index };
              if (slide.type === "video") {
                return (
                  <Composition
                    key={compositionId}
                    id={compositionId}
                    component={ContentRenderer}
                    durationInFrames={preset.durationInFrames}
                    fps={preset.fps}
                    width={fmt.width}
                    height={fmt.height}
                    defaultProps={props}
                  />
                );
              }
              return (
                <Still
                  key={compositionId}
                  id={compositionId}
                  component={ContentRenderer}
                  width={fmt.width}
                  height={fmt.height}
                  defaultProps={props}
                />
              );
            })}
          </Folder>
        );
      })}

      {/* Gray2 (teal gradient) */}
      <Folder name="Gray2-Teal">
        <Composition
          id="GoogleSynlighetGray2"
          component={GoogleSynlighetGray2}
          durationInFrames={240}
          fps={60}
          width={1080}
          height={1080}
        />
        <Still
          id="Slide2PortenGray2"
          component={Slide2PortenGray2}
          width={2160}
          height={2160}
        />
        <Still
          id="Slide3SjekkGray2"
          component={Slide3SjekkGray2}
          width={2160}
          height={2160}
        />
        <Still
          id="Slide4AdferdGray2"
          component={Slide4AdferdGray2}
          width={2160}
          height={2160}
        />
        <Still
          id="Slide5StemmeGray2"
          component={Slide5StemmeGray2}
          width={2160}
          height={2160}
        />
        <Still
          id="Slide6FinjusteringGray2"
          component={Slide6FinjusteringGray2}
          width={2160}
          height={2160}
        />
        <Still
          id="Slide7UtdatertGray2"
          component={Slide7UtdatertGray2}
          width={2160}
          height={2160}
        />
        <Still
          id="Slide8OppsummeringGray2"
          component={Slide8OppsummeringGray2}
          width={2160}
          height={2160}
        />
      </Folder>

      </Folder>{/* Slutt Eldre-Innlegg */}

      {/* --- TRIPLETEX DEMO ILLUSTRASJONER --- */}
      <Folder name="Tripletex-Demo">
        <Composition
          id="TripletexHeroDashboard"
          component={TripletexHeroDashboard}
          durationInFrames={180}
          fps={30}
          width={1200}
          height={900}
        />
        <Composition
          id="TripletexSupportChat"
          component={TripletexSupportChat}
          durationInFrames={180}
          fps={30}
          width={1200}
          height={900}
        />
        <Composition
          id="TripletexStartAS"
          component={TripletexStartAS}
          durationInFrames={180}
          fps={30}
          width={1200}
          height={900}
        />
        <Composition
          id="TripletexStatsCounter"
          component={TripletexStatsCounter}
          durationInFrames={120}
          fps={30}
          width={1400}
          height={520}
        />
        <Composition
          id="TripletexFeatureIcons"
          component={TripletexFeatureIcons}
          durationInFrames={120}
          fps={30}
          width={1320}
          height={680}
        />
        <Composition
          id="TripletexDashboard"
          component={TripletexDashboard}
          durationInFrames={300}
          fps={30}
          width={1200}
          height={820}
        />
      </Folder>
    </>
  );
};
