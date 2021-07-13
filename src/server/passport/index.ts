import bcrypt from "bcryptjs";
import passport from "passport";
import PassportLocal from "passport-local";
import { Schemas } from "../database";

const LocalStrategy = PassportLocal.Strategy


