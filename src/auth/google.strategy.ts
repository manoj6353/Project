import { PassportStrategy } from "@nestjs/passport";
import { Strategy, VerifyCallback } from "passport-google-oauth20";
import { Injectable } from "@nestjs/common";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, "google") {
  constructor() {
    super({
      clientID:
        "1005530123068-c03mao6p8t1o6o4o3ip7olea02nr92uj.apps.googleusercontent.com",
      clientSecret: "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",
      // callbackURL: 'http://localhost:3000/auth/google/callback',
      callbackURL: "http://localhost:4000/google/login",
      scope: ["email", "profile"],
    });
  }
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback
  ): Promise<any> {
    done(null, profile);
  }
}
