"use client";

import React, { useState, useMemo, useEffect } from "react";
import { SlidersHorizontal, ChevronDown, RotateCcw } from "lucide-react";
import type { ProductItem, ProductColor } from "@/data";
import ProductCard from "./ProductCard";
import FilterSidebar from "./FilterSidebar";
import Pagination from "./Pagination";

interface CollectionProductListingProps {
  collectionName: string;
  titlePrimary: string;
  titleSecondary: string;
  description?: string;
  initialProducts: ProductItem[];
  showCollectionFilter?: boolean;
}

export default function CollectionProductListing({
  collectionName,
  titlePrimary,
  titleSecondary,
  description = "A range of soft, breathable and easy-to-wear innerwear for everyday comfort.",
  initialProducts,
  showCollectionFilter = false,
}: CollectionProductListingProps) {
  // -------------------------------------------------------------
  // 1. EXTRACT REAL DYNAMIC FILTER DATA DIRECTLY FROM PRODUCTS
  // -------------------------------------------------------------

  // Real dynamic collections and counts (used when showCollectionFilter is true)
  const dynamicCollections = useMemo(() => {
    const map = new Map<string, number>();
    initialProducts.forEach((p) => {
      if (p.collection) {
        map.set(p.collection, (map.get(p.collection) || 0) + 1);
      }
    });
    return Array.from(map.entries()).map(([name, count]) => ({
      name,
      count,
    }));
  }, [initialProducts]);

  // Real dynamic categories and counts
  const dynamicCategories = useMemo(() => {
    const map = new Map<string, number>();
    initialProducts.forEach((p) => {
      if (p.category) {
        map.set(p.category, (map.get(p.category) || 0) + 1);
      }
    });
    return Array.from(map.entries()).map(([name, count]) => ({
      name,
      count,
    }));
  }, [initialProducts]);

  // Real dynamic price range (min and max)
  const { minPrice, maxPrice } = useMemo(() => {
    if (!initialProducts || initialProducts.length === 0) {
      return { minPrice: 0, maxPrice: 1500 };
    }
    const prices = initialProducts.map((p) => p.price);
    return {
      minPrice: Math.min(...prices),
      maxPrice: Math.max(...prices),
    };
  }, [initialProducts]);

  // Real dynamic sizes extracted directly from product availableSizes / sizes string
  const dynamicSizes = useMemo(() => {
    const sizeSet = new Set<string>();
    initialProducts.forEach((p) => {
      if (p.availableSizes && p.availableSizes.length > 0) {
        p.availableSizes.forEach((s) => sizeSet.add(s));
      } else if (p.sizes) {
        // Fallback: parse tokens from sizes string (e.g. "32B-40D" or "S, M, L")
        const tokens = p.sizes.split(/[\s,/-]+/).filter((t) => t.length > 0);
        tokens.forEach((t) => {
          if (!t.toLowerCase().includes("sizes")) {
            sizeSet.add(t);
          }
        });
      }
    });

    // Natural sort sizes (e.g. 32B, 32C, 34B... or XS, S, M, L, XL)
    return Array.from(sizeSet).sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
    );
  }, [initialProducts]);

  // Real dynamic colors de-duplicated from products
  const dynamicColors = useMemo(() => {
    const colorMap = new Map<string, ProductColor>();
    initialProducts.forEach((p) => {
      if (p.colors && p.colors.length > 0) {
        p.colors.forEach((c) => {
          if (!colorMap.has(c.name.toLowerCase())) {
            colorMap.set(c.name.toLowerCase(), c);
          }
        });
      }
    });
    return Array.from(colorMap.values());
  }, [initialProducts]);

  // Real dynamic cup types extracted from products
  const dynamicCupTypes = useMemo(() => {
    const map = new Map<string, number>();
    initialProducts.forEach((p) => {
      if (p.cupType) {
        map.set(p.cupType, (map.get(p.cupType) || 0) + 1);
      }
    });
    return Array.from(map.entries()).map(([type, count]) => ({
      type,
      count,
    }));
  }, [initialProducts]);

  // -------------------------------------------------------------
  // 2. FILTER & SORT STATES
  // -------------------------------------------------------------
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentMaxPrice, setCurrentMaxPrice] = useState<number>(maxPrice);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedCupTypes, setSelectedCupTypes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("popular");

  // Interaction states for cards
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  const [addedCart, setAddedCart] = useState<Record<string, boolean>>({});
  const [cardSelectedColors, setCardSelectedColors] = useState<Record<string, number>>({});

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Sync currentMaxPrice if maxPrice dynamically changes with different products
  useEffect(() => {
    setCurrentMaxPrice(maxPrice);
  }, [maxPrice]);

  // Handlers for toggles
  const handleToggleCollection = (colName: string) => {
    setCurrentPage(1);
    if (colName === "ALL") {
      setSelectedCollections([]);
      return;
    }
    setSelectedCollections((prev) =>
      prev.includes(colName) ? prev.filter((c) => c !== colName) : [...prev, colName]
    );
  };

  const handleToggleCategory = (categoryName: string) => {
    setCurrentPage(1);
    if (categoryName === "ALL") {
      setSelectedCategories([]);
      return;
    }
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((c) => c !== categoryName)
        : [...prev, categoryName]
    );
  };

  const handlePriceChange = (newMax: number) => {
    setCurrentPage(1);
    setCurrentMaxPrice(newMax);
  };

  const handleToggleSize = (size: string) => {
    setCurrentPage(1);
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleToggleColor = (colorName: string) => {
    setCurrentPage(1);
    setSelectedColors((prev) =>
      prev.includes(colorName)
        ? prev.filter((c) => c !== colorName)
        : [...prev, colorName]
    );
  };

  const handleToggleCupType = (cupType: string) => {
    setCurrentPage(1);
    setSelectedCupTypes((prev) =>
      prev.includes(cupType)
        ? prev.filter((t) => t !== cupType)
        : [...prev, cupType]
    );
  };

  const handleClearAll = () => {
    setSelectedCollections([]);
    setSelectedCategories([]);
    setCurrentMaxPrice(maxPrice);
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedCupTypes([]);
    setCurrentPage(1);
  };

  const hasActiveFilters =
    selectedCollections.length > 0 ||
    selectedCategories.length > 0 ||
    currentMaxPrice < maxPrice ||
    selectedSizes.length > 0 ||
    selectedColors.length > 0 ||
    selectedCupTypes.length > 0;

  // -------------------------------------------------------------
  // 3. REACTIVE FILTERING & SORTING LOGIC
  // -------------------------------------------------------------
  const filteredAndSortedProducts = useMemo(() => {
    const result = initialProducts.filter((product) => {
      // 0. Collection filter (when enabled)
      if (
        selectedCollections.length > 0 &&
        !selectedCollections.includes(product.collection)
      ) {
        return false;
      }

      // 1. Category filter
      if (
        selectedCategories.length > 0 &&
        !selectedCategories.includes(product.category)
      ) {
        return false;
      }

      // 2. Price filter
      if (product.price > currentMaxPrice) {
        return false;
      }

      // 3. Size filter
      if (selectedSizes.length > 0) {
        const productSizes = product.availableSizes || [];
        const matchesAnySize = selectedSizes.some(
          (sz) => productSizes.includes(sz) || product.sizes.includes(sz)
        );
        if (!matchesAnySize) return false;
      }

      // 4. Color filter
      if (selectedColors.length > 0) {
        const matchesAnyColor = product.colors.some((c) =>
          selectedColors.some(
            (sc) => sc.toLowerCase() === c.name.toLowerCase()
          )
        );
        if (!matchesAnyColor) return false;
      }

      // 5. Cup Type filter
      if (selectedCupTypes.length > 0) {
        if (!product.cupType || !selectedCupTypes.includes(product.cupType)) {
          return false;
        }
      }

      return true;
    });

    // Sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "popular":
      default:
        result.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
        break;
    }

    return result;
  }, [
    initialProducts,
    selectedCollections,
    selectedCategories,
    currentMaxPrice,
    selectedSizes,
    selectedColors,
    selectedCupTypes,
    sortBy,
  ]);

  // -------------------------------------------------------------
  // 4. RESPONSIVE ITEMS PER PAGE (10 on mobile, 9 on desktop)
  // -------------------------------------------------------------
  const [itemsPerPage, setItemsPerPage] = useState<number>(9);

  useEffect(() => {
    const updateItemsPerPage = () => {
      // Mobile view (< 1024px lg breakpoint, 2-column grid): 10 items (5 rows × 2)
      // Desktop view (>= 1024px, 3-column grid): 9 items (3 rows × 3)
      setItemsPerPage(window.innerWidth < 1024 ? 10 : 9);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalProducts = filteredAndSortedProducts.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  // Clamp current page if itemsPerPage changes and current page exceeds totalPages
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedProducts, currentPage, itemsPerPage]);

  const showingStart = totalProducts === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const showingEnd = Math.min(currentPage * itemsPerPage, totalProducts);

  // Card click handlers
  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleCart = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAddedCart((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCardColorSelect = (
    productId: string,
    colorIdx: number,
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setCardSelectedColors((prev) => ({ ...prev, [productId]: colorIdx }));
  };

  return (
    <section className="w-full bg-[#fdfbf9] py-10 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Left Filter Sidebar + Right Products Grid */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          {/* Desktop Filter Sidebar (Modular Component) */}
          <div className="hidden lg:block w-64 xl:w-72 shrink-0">
            <FilterSidebar
              showCollectionFilter={showCollectionFilter}
              collections={dynamicCollections}
              selectedCollections={selectedCollections}
              onToggleCollection={handleToggleCollection}
              categories={dynamicCategories}
              collectionName={collectionName}
              totalProductsCount={initialProducts.length}
              minPrice={minPrice}
              maxPrice={maxPrice}
              currentMaxPrice={currentMaxPrice}
              availableSizes={dynamicSizes}
              availableColors={dynamicColors}
              availableCupTypes={dynamicCupTypes}
              selectedCategories={selectedCategories}
              selectedSizes={selectedSizes}
              selectedColors={selectedColors}
              selectedCupTypes={selectedCupTypes}
              hasActiveFilters={hasActiveFilters}
              onToggleCategory={handleToggleCategory}
              onPriceChange={handlePriceChange}
              onToggleSize={handleToggleSize}
              onToggleColor={handleToggleColor}
              onToggleCupType={handleToggleCupType}
              onClearAll={handleClearAll}
            />
          </div>

          {/* Right Main Content Area */}
          <div className="flex-1 min-w-0 w-full">
            {/* Header Section: Title + Description */}
            <div className="mb-6 sm:mb-8">
              <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-normal text-neutral-900 tracking-tight leading-tight">
                {titlePrimary}{" "}
                <span className="font-serif font-normal text-[#9f6e5a]">
                  {titleSecondary}
                </span>{" "}
                {showCollectionFilter ? "" : "Collection"}
              </h1>
              <p className="font-sans text-xs sm:text-sm text-neutral-600 mt-2 font-light max-w-2xl">
                {description}
              </p>
            </div>

            {/* Top Toolbar: Products Count + Mobile Filter Trigger + Sort Dropdown */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[#ede5dd]">
              {/* Product Count Display: "Showing 1-10 of 100 Products" */}
              <p className="font-sans text-xs sm:text-[13px] text-neutral-500 font-normal">
                Showing{" "}
                <span className="font-medium text-neutral-900">
                  {showingStart}-{showingEnd}
                </span>{" "}
                of{" "}
                <span className="font-medium text-neutral-900">
                  {totalProducts}
                </span>{" "}
                Products
              </p>

              {/* Mobile Filter Toggle & Sort Dropdown */}
              <div className="flex items-center gap-3">
                {/* Mobile Filter Button */}
                <button
                  type="button"
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#ede5dd] bg-white text-xs font-sans font-medium text-neutral-800 shadow-2xs hover:bg-[#faf7f4] transition-colors cursor-pointer"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 stroke-[2]" />
                  <span>Filters</span>
                  {hasActiveFilters && (
                    <span className="w-2 h-2 rounded-full bg-[#9f6e5a]" />
                  )}
                </button>

                {/* Sort By Dropdown */}
                <div className="relative inline-flex items-center">
                  <span className="text-xs sm:text-[13px] text-neutral-500 mr-2 hidden sm:inline">
                    Sort by:
                  </span>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => {
                        setSortBy(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="appearance-none bg-white border border-[#ede5dd] rounded-lg py-1.5 pl-3 pr-8 text-xs sm:text-[13px] font-sans font-medium text-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-800 cursor-pointer shadow-2xs"
                    >
                      <option value="popular">Most Popular</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="name-asc">Alphabetical</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-neutral-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {paginatedProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
                {paginatedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isWishlisted={!!wishlist[product.id]}
                    onToggleWishlist={toggleWishlist}
                    isAddedToCart={!!addedCart[product.id]}
                    onToggleCart={toggleCart}
                    activeColorIndex={cardSelectedColors[product.id] ?? 0}
                    onColorSelect={handleCardColorSelect}
                  />
                ))}
              </div>
            ) : (
              /* Empty state when no products match active filters */
              <div className="py-16 sm:py-20 text-center bg-white rounded-2xl border border-[#ede5dd] p-8">
                <p className="font-playfair text-lg sm:text-xl text-neutral-900">
                  No products found
                </p>
                <p className="font-sans text-xs sm:text-sm text-neutral-500 mt-1 max-w-sm mx-auto">
                  No products matched your selected filters. Try broadening your criteria or reset filters.
                </p>
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="mt-5 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#241d1b] text-white text-xs font-sans font-medium hover:bg-[#382f2c] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              </div>
            )}

            {/* Pagination Component */}
            {totalPages > 1 && (
              <div className="mt-10 sm:mt-12">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Modular Component) */}
      <FilterSidebar
        isMobileDrawer
        isOpenMobile={isMobileFilterOpen}
        onCloseMobile={() => setIsMobileFilterOpen(false)}
        showCollectionFilter={showCollectionFilter}
        collections={dynamicCollections}
        selectedCollections={selectedCollections}
        onToggleCollection={handleToggleCollection}
        categories={dynamicCategories}
        collectionName={collectionName}
        totalProductsCount={initialProducts.length}
        minPrice={minPrice}
        maxPrice={maxPrice}
        currentMaxPrice={currentMaxPrice}
        availableSizes={dynamicSizes}
        availableColors={dynamicColors}
        availableCupTypes={dynamicCupTypes}
        selectedCategories={selectedCategories}
        selectedSizes={selectedSizes}
        selectedColors={selectedColors}
        selectedCupTypes={selectedCupTypes}
        hasActiveFilters={hasActiveFilters}
        onToggleCategory={handleToggleCategory}
        onPriceChange={handlePriceChange}
        onToggleSize={handleToggleSize}
        onToggleColor={handleToggleColor}
        onToggleCupType={handleToggleCupType}
        onClearAll={handleClearAll}
      />
    </section>
  );
}
