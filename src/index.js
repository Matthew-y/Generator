import Generator from './views/index/Home.vue'

const install = app => {
  app.use(Generator)
}

const FormGeneratorMh = {
  install
}

export { Generator }
export default FormGeneratorMh
