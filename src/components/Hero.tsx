import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export type HeroType = {
  className?: string;
};

const SimpliqueAAnlise = styled.h1`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: inherit;
  letter-spacing: 1px;
  line-height: 5.125rem;
  font-weight: 800;
  font-family: inherit;
  display: inline-block;
  max-width: 100%;
  z-index: 3;
  @media screen and (max-width: 825px) {
    font-size: var(--font-size-40xl);
    line-height: 4.125rem;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-25xl);
    line-height: 3.063rem;
  }
`;
const SimpliqueAAnliseDeContratWrapper = styled.div`
  width: 70.313rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-10xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const NossaFerramenta = styled.p`
  margin-block-start: 0;
  margin-block-end: 9px;
  white-space: pre-wrap;
`;
const OrganizaEUtiliza = styled.p`
  margin: 0;
`;
const NossaFerramentaTransformaContainer = styled.span``;
const NossaFerramentaTransformaContainer1 = styled.div`
  height: 9.313rem;
  flex: 1;
  position: relative;
  letter-spacing: 2px;
  line-height: 1.438rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  max-width: 100%;
  z-index: 3;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: 1.125rem;
  }
`;
const Transformation = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem var(--padding-9xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const Heading = styled.div`
  width: 11.25rem;
  position: relative;
  line-height: 1.25rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
const DiferentesModelos = styled.b`
  white-space: pre-wrap;
`;
const DeContratos = styled.span`
  white-space: pre-wrap;
`;
const TreinamentosComDiferentesContainer = styled.div`
  flex: 1;
  position: relative;
  line-height: 0.813rem;
`;
const PictureSuseppngwebp = styled.img`
  position: absolute;
  top: 0.938rem;
  left: 0.625rem;
  width: 3.013rem;
  height: 3.013rem;
  overflow: hidden;
  object-fit: cover;
`;
const TrainingImageChild = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  border: 1px solid var(--color-lightgray);
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  z-index: 4;
`;
const TrainingImage = styled.div`
  height: 5.125rem;
  width: 16.125rem;
  position: absolute;
  margin: 0 !important;
  top: -2.187rem;
  left: -4.312rem;
`;
const TrainingDescription = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const Models = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xl) 0rem 0rem;
  margin-left: -11.25rem;
  color: var(--color-white);
`;
const Quadrados = styled.div`
  flex: 0.7824;
  border-radius: var(--br-9xs);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-mid) 0rem var(--padding-2xl) var(--padding-54xl);
  box-sizing: border-box;
  min-width: 11.313rem;
  z-index: 3;
  @media screen and (max-width: 675px) {
    flex: 1;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const PictureSuseppngwebp1 = styled.img`
  width: 3.013rem;
  height: 3.013rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const SUSEPImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs-9) 0rem 0rem;
`;
const Heading1 = styled.div`
  width: 7.594rem;
  position: relative;
  line-height: 1.25rem;
  font-weight: 800;
  display: flex;
  align-items: center;
`;
const Span = styled.span`
  font-weight: 800;
`;
const Contratos = styled.span`
  font-weight: 500;
`;
const IntelignciaTreinadaComContainer = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 1rem;
  color: var(--color-white);
`;
const SUSEPDescription = styled.div`
  width: 10.888rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12xs-5);
`;
const FrameChild = styled.div`
  height: 5.125rem;
  width: 16.125rem;
  position: relative;
  border: 1px solid var(--color-lightgray);
  box-sizing: border-box;
  display: none;
`;
const SUSEPImageParent = styled.div`
  flex: 1;
  border: 1px solid var(--color-lightgray);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-2xs) var(--padding-4xs) var(--padding-mini);
  gap: var(--gap-xs);
  z-index: 1;
`;
const Quadrados1 = styled.div`
  flex: 1;
  border-radius: var(--br-9xs);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-5xs) 0rem;
  box-sizing: border-box;
  min-width: 11.313rem;
  z-index: 3;
  @media screen and (max-width: 675px) {
    flex: 1;
  }
`;
const Highlights = styled.div`
  width: 36.875rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-xl) 0rem 0rem;
  box-sizing: border-box;
  gap: var(--gap-sm);
  max-width: 100%;
  margin-top: -0.75rem;
  font-size: var(--font-size-xs);
  color: var(--color-mediumaquamarine);
  @media screen and (max-width: 675px) {
    flex-wrap: wrap;
  }
`;
const Features = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const Description = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-6xs) var(--padding-10xs);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-xl);
  color: var(--color-silver-300);
`;
const BotoIniciarSesso = styled(Button)`
  width: 20.063rem;
  height: 4.188rem;
  max-width: 100%;
  cursor: pointer;
  z-index: 3;
`;
const HeroRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-24xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-55xl);
  color: var(--color-white);
  font-family: var(--font-mulish);
  @media screen and (max-width: 675px) {
    gap: var(--gap-2xl);
  }
`;

const Hero: FunctionComponent<HeroType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onBotoIniciarSessoClick = useCallback(() => {
    navigate("/pgina-login");
  }, [navigate]);

  return (
    <HeroRoot className={className}>
      <SimpliqueAAnliseDeContratWrapper>
        <SimpliqueAAnlise>
          Simplique a análise de Contratos com a Ursula
        </SimpliqueAAnlise>
      </SimpliqueAAnliseDeContratWrapper>
      <Description>
        <Features>
          <Transformation>
            <NossaFerramentaTransformaContainer1>
              <NossaFerramentaTransformaContainer>
                <NossaFerramenta>
                  Nossa ferramenta transforma a maneira como você examina,
                </NossaFerramenta>
                <OrganizaEUtiliza>
                  organiza e utiliza informações contratuais.
                </OrganizaEUtiliza>
              </NossaFerramentaTransformaContainer>
            </NossaFerramentaTransformaContainer1>
          </Transformation>
          <Highlights>
            <Quadrados>
              <Heading>Tipos de contratos</Heading>
              <Models>
                <TrainingDescription>
                  <TreinamentosComDiferentesContainer>
                    <NossaFerramentaTransformaContainer>{`Treinamentos com `}</NossaFerramentaTransformaContainer>
                    <DiferentesModelos>{`diferentes  modelos `}</DiferentesModelos>
                    <DeContratos>{`de contratos.  `}</DeContratos>
                  </TreinamentosComDiferentesContainer>
                  <TrainingImage>
                    <PictureSuseppngwebp
                      loading="lazy"
                      alt=""
                      src="/picture--suseppngwebp1@2x.png"
                    />
                    <TrainingImageChild />
                  </TrainingImage>
                </TrainingDescription>
              </Models>
            </Quadrados>
            <Quadrados1>
              <SUSEPImageParent>
                <SUSEPImage>
                  <PictureSuseppngwebp1
                    loading="lazy"
                    alt=""
                    src="/picture--suseppngwebp@2x.png"
                  />
                </SUSEPImage>
                <SUSEPDescription>
                  <Heading1>Treinamento da AI</Heading1>
                  <IntelignciaTreinadaComContainer>
                    <NossaFerramentaTransformaContainer>
                      Inteligência Treinada com mais de +
                    </NossaFerramentaTransformaContainer>
                    <Span>100.000</Span>
                    <Contratos> contratos</Contratos>
                  </IntelignciaTreinadaComContainer>
                </SUSEPDescription>
                <FrameChild />
              </SUSEPImageParent>
            </Quadrados1>
          </Highlights>
        </Features>
      </Description>
      <BotoIniciarSesso
        disableElevation
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#333",
          fontSize: "26",
          background: "#0cd2ab",
          borderRadius: "4px",
          "&:hover": { background: "#0cd2ab" },
          width: 321,
          height: 67,
        }}
        onClick={onBotoIniciarSessoClick}
      >
        Iniciar Sessão
      </BotoIniciarSesso>
    </HeroRoot>
  );
};

export default Hero;
