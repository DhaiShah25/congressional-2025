import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { Star, MapPin, Briefcase, Phone, Mail } from "lucide-react";

export function ContractorCard(props) {
    const { name, location, rating, reviewCount, experience, image, phoneNumber, email } = props;

    return (
        <Card className="hover:shadow-lg transition-all rounded border sm:w-96">
            <div className={"aspect-square w-[50%] object-cover mx-auto m-2 bg-gray-100 rounded border overflow-hidden border rounded-full" + (image ? "" : " pulse")}>
                <img
                    src={image}
                    alt={"Picture Of " + name}
                    className="w-full h-full object-cover text-transparent"
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
                    <span className="text-muted-foreground">{experience} years experience</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{phoneNumber}</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{email}</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="font-semibold">{rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({reviewCount} reviews)</span>
                </div>
            </CardContent>
        </Card >
    );
}
