
export interface LocationSection {
  title: string;
  content: string;
  image: string;
}

export interface LocationData {
  id: string;
  name: string;
  distance: string;
  factsTitle: string;
  factsContent: string;
  image: string;
  galleryImages?: string[];
  sections?: LocationSection[];
  hasReward?: boolean;
}

export interface NotificationData {
  message: string;
  location: LocationData;
}