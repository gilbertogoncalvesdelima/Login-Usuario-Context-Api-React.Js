/*
 * Para uma explicação detalhada sobre cada propriedade de configuração e verificação de tipo, visite:
 * https://jestjs.io/docs/configuration
 */
const options = {
  // Define o provedor de cobertura de código para V8
  coverageProvider: "v8",
  // Define o ambiente de teste como jsdom, que simula o ambiente de navegador DOM
  testEnvironment: "jsdom",
};

// Exporta as opções de configuração para Jest
export default options;
