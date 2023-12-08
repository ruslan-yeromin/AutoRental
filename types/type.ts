import { Dispatch, SetStateAction } from "react";

export interface CustomButtonProps {
  title?: string;
  onClick?: () => void;
  containerStyles?: string;
  rightIcon?: React.ReactNode;
  textStyles?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export interface InputElementProps {
  label: string;
  placeholder: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SignUpData {
  [key: string]: string;
  name: string;
  email: string;
  password: string;
}
export interface LoginData {
  [key: string]: string;
  email: string;
  password: string;
}

export interface User {
  email: string;
  name: string;
  _id: string;
}

export type ComponentLevelLoaderState = {
  loading: boolean;
  id: string;
};

export interface GlobalContextProps {
  isAuthUser: boolean;
  setIsAuthUser: Dispatch<SetStateAction<boolean>>;
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  componentLevelLoader: ComponentLevelLoaderState;
  setComponentLevelLoader: Dispatch<SetStateAction<ComponentLevelLoaderState>>;
}

export interface GlobalStateProps {
  children: React.ReactNode;
}

export interface LoaderProps {
    color?: string,
    loading?: boolean,
    size?: number
}

export interface Car {
  _id: string;
  name: string;
  description: string;
  rentalCost: {
    oneToThreeDays: number;
    fourToNineDays: number;
    tenToTwentyFiveDays: number;
    moreThanTwentySixDays: number;
  };
  deposit: number;
  bodyType: string;
  engineVolume: number;
  transmissionType: string;
  fuelType: string;
  fuelConsumption: number;
  trunkVolume: number;
  numberOfDoors: number;
  airConditioner: boolean;
  carClass: string;
  reviews: Array<{
    _id: string;
    authorName: string;
    review: string;
    date: Date;
  }>;
  images: string[];
  imgUrl: string;
  popularCar: boolean;
  seoUrl: string;
}

export interface SlidesProps {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  bgColor: string;
  cta: string;
}

export interface StarRatingProps {
  totalReviews: number;
}

export interface ProductTitleProps {
  carTitle: string;
}

export interface ProductDescProps {
  carDesc: string;
}

export interface CarFeaturesProps {
  bodyType: string;
  engineVolume: number;
  transmissionType: string;
  fuelType: string;
  trunkVolume: number;
  numberOfDoors: number;
  airConditioner: boolean;
  fuelConsumption: number;
}

export interface FeaturesItemProps {
  Icon: React.FC<{ className?: string }>;
  title: string;
  data: string;
}

export interface RentalCost {
  oneToThreeDays: number;
  fourToNineDays: number;
  tenToTwentyFiveDays: number;
  moreThanTwentySixDays: number;
}

export interface PriceBlockProps {
  rentalCost: RentalCost;
  deposit: number;
}

export interface ProductReviewsProps {
  _id: string;
  authorName: string;
  review: string;
  date: Date;
}

export interface ReviewProps {
  reviews: ProductReviewsProps[];
}

export interface QueryConditions {
  bodyType?: string | { $in: string[] };
  transmissionType?: string;
  fuelType?: string;
  carClass?: string;
}