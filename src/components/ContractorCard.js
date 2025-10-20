import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { Star, MapPin, Briefcase } from "lucide-react";

export function ContractorCard(props) {
  const { name, specialty, location, rating, reviewCount, yearsExperience, image } = props;

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-1 text-sm">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">{location}</span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <Briefcase className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">{yearsExperience} years experience</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-semibold">{rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({reviewCount} reviews)</span>
        </div>
      </CardContent>
    </Card>
  );
}
