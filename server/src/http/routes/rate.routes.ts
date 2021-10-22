import { Application } from "express";
import CommonRoutes from "./common.routes";
import ListRatesAction from "../actions/rates/list.rates.action";
import createRatesAction from "../actions/rates/create.rates.action";
import updateRatesAction from "../actions/rates/update.rates.action";
import deleteRatesAction from "../actions/rates/delete.rates.action";

class RateRoutes extends CommonRoutes {
  constructor(app: Application) {
    super(app, 'Rate');
  }

  setUpRoutes(): Application {
    this.app.get('/rates', ListRatesAction.run);

    this.app.post('/rates', createRatesAction.run);

    this.app.put('/rates/:id', updateRatesAction.run);

    this.app.delete('/rates/:id', deleteRatesAction.run);

    return this.app;
  }
}

export default RateRoutes;
