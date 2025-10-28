import { useState } from "react";
import { Card } from "./Card";
import { ChevronDown } from "lucide-react";

/**
 * @typedef {Object} ArticleCardProps
 * @property {string} title
 * @property {string} excerpt
 * @property {string} content
 * @property {string} category
 * @property {string} readTime
 */

/**
 * @param {ArticleCardProps} props
 */
export default ArticleCard = ({
    title,
    excerpt,
    content,
    category,
    readTime,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Card
            className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] bg-gradient-to-br from-card to-card/95 border-border/50"
            style={{ boxShadow: "var(--shadow-card)" }}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full">
                        {category}
                    </span>
                    <span className="text-sm">{readTime}</span>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-transparent">
                    {title}
                </h3>

                <p className="mb-4 leading-relaxed">{excerpt}</p>

                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-[1000px] opacity-100 mb-4" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="pt-4 border-t border-border/50">
                        <p className="text-foreground leading-relaxed whitespace-pre-line">
                            {content}
                        </p>
                    </div>
                </div>

                <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    <span>{isExpanded ? "Read less" : "Read more"}</span>
                    <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                            }`}
                    />
                </div>
            </div>

            {/* Gradient accent on hover */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Card>
    );
};
