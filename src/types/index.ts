export interface SkillType {
  name: string;
  icon: string;
  color: string;
  progress: number;
}

export interface ServiceType {
  title: string;
  icon: string;
  description: string;
}

export interface AchievementType {
  title: string;
  icon: string;
  description: string;
}

export interface ProjectType {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

export interface SocialLinkType {
  platform: string;
  url: string;
  icon: string;
}