import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import Image from 'next/image';
import { NoContent } from '../error/no-content';

type BlogPosts = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
};

type Props = {
  blogPosts?: BlogPosts[];
};

export const BlogSection = ({ blogPosts }: Props) => {
  const hasBlogPosts = blogPosts && blogPosts.length > 0;

  return (
    <section className="py-6 px-4 bg-gray-50 rounded-lg">
      <SectionHeader title="From the Blog" showButton={hasBlogPosts} />

      {hasBlogPosts ? (
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map(
            ({ id, title, excerpt, date, readTime, image, category }) => (
              <Card
                key={id}
                className="overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-200 group bg-white"
              >
                <div className="h-48 bg-white overflow-hidden">
                  <Image
                    width={100}
                    height={100}
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <CardContent className="pt-4 pb-2">
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-50 text-gray-700 rounded-full">
                      {category}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {excerpt}
                  </p>
                </CardContent>

                <CardFooter className="text-sm text-gray-500 flex justify-between border-t border-gray-100 py-3">
                  <span>{date}</span>
                  <span className="text-gray-600">{readTime}</span>
                </CardFooter>
              </Card>
            ),
          )}
        </div>
      ) : (
        <NoContent sectionName="blog posts" />
      )}
    </section>
  );
};
